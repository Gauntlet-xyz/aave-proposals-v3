import {CHAIN_TO_CHAIN_ID, getDate, getPoolChain, pascalCase} from '../generator/common';
import {CHAIN_ID_CLIENT_MAP} from '@bgd-labs/aave-cli';
import {PublicClient} from 'viem';
import {PoolCache, PoolIdentifier} from '../generator/types';
import {getPoolNameOrMulti} from './utils';

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

export const protocolMapping: ProtocolMapping = {
  'v3-optimism-governance': 'AaveV3Optimism',
  'v3-metis-governance': 'AaveV3Metis',
  'v3-base-governance': 'AaveV3Base',
  'v3-avalanche-governance': 'AaveV3Avalanche',
  'v3-arbitrum-governance': 'AaveV3Arbitrum',
  'v3-polygon-governance': 'AaveV3Polygon',
  'v3-ethereum-governance': 'AaveV3Ethereum',
};

async function generateDeterministicPoolCache(pool: PoolIdentifier): Promise<PoolCache> {
  const chain = getPoolChain(pool);
  const client = CHAIN_ID_CLIENT_MAP[CHAIN_TO_CHAIN_ID[chain]] as PublicClient;
  return {blockNumber: Number(await client.getBlockNumber())};
}

function divideBy100(value: string): string {
  return (parseFloat(value) / 100).toString();
}

function divideBy100Subtract100(value: string): string {
  return (parseFloat(value) / 100 - 1).toString();
}

function mapBooleanToEnabledDisabled(param) {
  if (param === true) {
    return 'ENABLED';
  } else if (param === false) {
    return 'DISABLED';
  }
  return 'KEEP_CURRENT';
}

export async function transformInput(inputObject: InputObject) {
  const output: any = {rootOptions: {}, poolOptions: {}};
  function shouldExcludeBorrowUpdate(obj) {
    const keysToCheck = [
      'enabledToBorrow',
      'flashloanable',
      'stableRateModeEnabled',
      'borrowableInIsolation',
      'withSiloedBorrowing',
    ];
    return keysToCheck.every((key) => obj[key] === 'KEEP_CURRENT') && obj.reserveFactor === '';
  }

  // const configFilePath =
  //   './src/' +
  //   getDate() +
  //   '_' +
  //   getPoolNameOrMulti(inputObject) +
  //   '_' +
  //   pascalCase(inputObject.global.title) +
  //   '/' +
  //   pascalCase(inputObject.global.title) +
  //   '.md';
  // Handle global configuration
  output.rootOptions = {
    // configFiles: configFilePath,
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
      FREEZE: [],
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
          ltv: params.ltv ? divideBy100(params.ltv) : '',
          liqThreshold: params.liqThreshold ? divideBy100(params.liqThreshold) : '',
          liqBonus: params.liqBonus ? divideBy100Subtract100(params.liqBonus) : '',
          debtCeiling: params.debtCeiling || '',
          liqProtocolFee: params.liqProtocolFee ? divideBy100(params.liqProtocolFee) : '',
        });
      }

      // BORROWS_UPDATE
      const borrowUpdateObj = {
        enabledToBorrow:
          params.enabledToBorrow !== undefined
            ? mapBooleanToEnabledDisabled(params.enabledToBorrow)
            : 'KEEP_CURRENT',
        flashloanable:
          params.flashlonable !== undefined
            ? mapBooleanToEnabledDisabled(params.flashlonable)
            : 'KEEP_CURRENT',
        stableRateModeEnabled:
          params.stableRateModeEnabled !== undefined
            ? mapBooleanToEnabledDisabled(params.stableRateModeEnabled)
            : 'KEEP_CURRENT',
        borrowableInIsolation:
          params.borrowableInIsolation !== undefined
            ? mapBooleanToEnabledDisabled(params.borrowableInIsolation)
            : 'KEEP_CURRENT',
        withSiloedBorrowing:
          params.withSiloedBorrowing !== undefined
            ? mapBooleanToEnabledDisabled(params.withSiloedBorrowing)
            : 'KEEP_CURRENT',
        reserveFactor: params.reserveFactor || '',
        asset,
      };

      if (!shouldExcludeBorrowUpdate(borrowUpdateObj)) {
        poolConfigs.BORROWS_UPDATE.push(borrowUpdateObj);
      }

      // FREEZE
      if (params.shouldBeFrozen !== undefined) {
        poolConfigs.FREEZE.push({
          asset,
          shouldBeFrozen: params.shouldBeFrozen,
        });
      }
    }

    if (!output.poolOptions[outputProtocol]) {
      output.poolOptions[outputProtocol] = {configs: {}};
    }

    // Append the parameter groups to poolOptions only if they have items
    if (poolConfigs.RATE_UPDATE_V3.length > 0) {
      output.poolOptions[outputProtocol] = {
        configs: {RATE_UPDATE_V3: poolConfigs.RATE_UPDATE_V3},
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
    if (poolConfigs.FREEZE.length > 0) {
      output.poolOptions[outputProtocol].configs = {
        ...output.poolOptions[outputProtocol].configs,
        FREEZE: poolConfigs.FREEZE,
      };
    }
    output.poolOptions[outputProtocol] = {
      configs: output.poolOptions[outputProtocol].configs,
      cache: await generateDeterministicPoolCache(outputProtocol as PoolIdentifier),
    };
  }
  console.log(output);
  return output;
}
