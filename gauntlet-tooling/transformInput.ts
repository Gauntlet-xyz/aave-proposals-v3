import {CHAIN_TO_CHAIN_ID, getDate, getPoolChain, pascalCase} from '../generator/common';
import {CHAIN_ID_CLIENT_MAP} from '@bgd-labs/aave-cli';
import {PublicClient} from 'viem';
import {PoolCache, PoolIdentifier} from '../generator/types';

export type InputObject = {
  [protocol: string]: {
    asset: {
      [assetName: string]: any;
    };
  };
} & {
  global: {
    title: string;
    author: string;
    snapshot: string;
    forumPost: string;
  };
};

export type ProtocolMapping = {
  [inputProtocolName: string]: string;
};

const protocolMapping: ProtocolMapping = {
  'v3-optimism-governance': 'AaveV3Optimism',
  'v3-metis-governance': 'AaveV3Metis',
  'v3-base-governance': 'AaveV3Base',
  'v3-avalanche-governance': 'AaveV3Avalanche',
  'v3-arbitrum-governance': 'AaveV3Arbitrum',
  'v3-polygon-governance': 'AaveV3Polygon',
  'v3-ethereum-governance': 'AaveV3Ethereum',
  // ... additional mappings
};

async function generateDeterministicPoolCache(pool: PoolIdentifier): Promise<PoolCache> {
  const chain = getPoolChain(pool);
  const client = CHAIN_ID_CLIENT_MAP[CHAIN_TO_CHAIN_ID[chain]] as PublicClient;
  return {blockNumber: Number(await client.getBlockNumber())};
}

export async function transformInput(inputObject: InputObject) {
  const output: any = {rootOptions: {}, poolOptions: {}};

  // Handle global configuration
  output.rootOptions = {
    title: inputObject.global.title,
    shortName: pascalCase(inputObject.global.title),
    date: getDate(),
    author: inputObject.global.author,
    discussion: inputObject.global.snapshot,
    snapshot: inputObject.global.forumPost,
    pools: [],
  };

  for (const protocol in inputObject) {
    if (protocol === 'global') continue;

    const outputProtocol = protocolMapping[protocol] || protocol;
    output.rootOptions.pools.push(outputProtocol);

    const poolConfigs: any = {
      RATE_UPDATE_V3: [],
      CAPS_UPDATE: [],
      COLLATERALS_UPDATE: [],
      BORROWS_UPDATE: [],
    };

    for (const asset in inputObject[protocol].asset) {
      const params = inputObject[protocol].asset[asset];

      // RATE_UPDATE_V3
      if (params.interestRateStrategy) {
        poolConfigs.RATE_UPDATE_V3.push({
          asset,
          params: {...params.interestRateStrategy},
        });
      }

      // CAPS_UPDATE
      if (params.supplyCap || params.borrowCap) {
        poolConfigs.CAPS_UPDATE.push({
          asset,
          supplyCap: params.supplyCap || '',
          borrowCap: params.borrowCap || '',
        });
      }

      // COLLATERALS_UPDATE
      if (
        params.ltv ||
        params.liqThreshold ||
        params.liqBonus ||
        params.debtCeiling ||
        params.liqProtocolFee
      ) {
        poolConfigs.COLLATERALS_UPDATE.push({
          asset,
          ltv: params.ltv || '',
          liqThreshold: params.liqThreshold || '',
          liqBonus: params.liqBonus || '',
          debtCeiling: params.debtCeiling || '',
          liqProtocolFee: params.liqProtocolFee || '',
        });
      }

      // BORROWS_UPDATE
      poolConfigs.BORROWS_UPDATE.push({
        enabledToBorrow:
          params.enabledToBorrow !== undefined
            ? params.enabledToBorrow
              ? 'ENABLED'
              : 'DISABLED'
            : 'KEEP_CURRENT',
        flashloanable:
          params.flashlonable !== undefined
            ? params.flashlonable
              ? 'ENABLED'
              : 'DISABLED'
            : 'KEEP_CURRENT',
        stableRateModeEnabled:
          params.stableRateModeEnabled !== undefined
            ? params.stableRateModeEnabled
              ? 'ENABLED'
              : 'DISABLED'
            : 'KEEP_CURRENT',
        borrowableInIsolation:
          params.borrowableInIsolation !== undefined
            ? params.borrowableInIsolation
              ? 'ENABLED'
              : 'DISABLED'
            : 'KEEP_CURRENT',
        withSiloedBorrowing:
          params.withSiloedBorrowing !== undefined
            ? params.withSiloedBorrowing
              ? 'ENABLED'
              : 'DISABLED'
            : 'KEEP_CURRENT',
        reserveFactor: params.reserveFactor || '',
        asset,
      });
    }

    // Append the parameter groups to poolOptions only if they have items
    if (poolConfigs.RATE_UPDATE_V3.length > 0) {
      output.poolOptions[outputProtocol] = {
        configs: {RATE_UPDATE_V3: poolConfigs.RATE_UPDATE_V3},
        cache: await generateDeterministicPoolCache(outputProtocol as PoolIdentifier),
      };
    }
    if (poolConfigs.CAPS_UPDATE.length > 0) {
      output.poolOptions[outputProtocol].configs = {
        ...output.poolOptions[outputProtocol].configs,
        CAPS_UPDATE: poolConfigs.CAPS_UPDATE,
      };
    }
    if (poolConfigs.COLLATERALS_UPDATE.length > 0) {
      output.poolOptions[outputProtocol].configs = {
        ...output.poolOptions[outputProtocol].configs,
        COLLATERALS_UPDATE: poolConfigs.COLLATERALS_UPDATE,
      };
    }
    if (poolConfigs.BORROWS_UPDATE.length > 0) {
      output.poolOptions[outputProtocol].configs = {
        ...output.poolOptions[outputProtocol].configs,
        BORROWS_UPDATE: poolConfigs.BORROWS_UPDATE,
      };
    }
  }

  return output;
}
