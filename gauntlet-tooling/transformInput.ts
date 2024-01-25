export type InputObject = {
  [protocol: string]: {
    asset: {
      [assetName: string]: any;
    };
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
};

export function transformInput(inputObject: InputObject) {
  const output: any = {};

  for (const protocol in inputObject) {
    const outputProtocol = protocolMapping[protocol] || protocol;
    output[outputProtocol] = {
      configs: {},
      cache: {blockNumber: 115311124},
    };

    for (const asset in inputObject[protocol].asset) {
      const params = inputObject[protocol].asset[asset];

      // RATE_UPDATE_V3
      if (params.interestRateStrategy) {
        output[outputProtocol].configs.RATE_UPDATE_V3 = [
          {
            asset,
            params: {...params.interestRateStrategy},
          },
        ];
      }

      // CAPS_UPDATE
      if (params.supplyCap || params.borrowCap) {
        output[outputProtocol].configs.CAPS_UPDATE = [
          {
            asset,
            supplyCap: params.supplyCap || '',
            borrowCap: params.borrowCap || '',
          },
        ];
      }

      // COLLATERALS_UPDATE
      if (
        params.ltv ||
        params.liqThreshold ||
        params.liqBonus ||
        params.debtCeiling ||
        params.liqProtocolFee
      ) {
        output[outputProtocol].configs.COLLATERALS_UPDATE = [
          {
            asset,
            ltv: params.ltv || '',
            liqThreshold: params.liqThreshold || '',
            liqBonus: params.liqBonus || '',
            debtCeiling: params.debtCeiling || '',
            liqProtocolFee: params.liqProtocolFee || '',
          },
        ];
      }

      // BORROWS_UPDATE
      if (
        params.enabledToBorrow !== undefined ||
        params.flashlonable !== undefined ||
        params.stableRateModeEnabled !== undefined ||
        params.borrowableInIsolation !== undefined ||
        params.withSiloedBorrowing !== undefined ||
        params.reserveFactor
      ) {
        output[outputProtocol].configs.BORROWS_UPDATE = [
          {
            enabledToBorrow: params.enabledToBorrow ? 'ENABLED' : 'DISABLED',
            flashloanable: params.flashlonable ? 'ENABLED' : 'DISABLED',
            stableRateModeEnabled: params.stableRateModeEnabled ? 'ENABLED' : 'DISABLED',
            borrowableInIsolation: params.borrowableInIsolation ? 'ENABLED' : 'DISABLED',
            withSiloedBorrowing: params.withSiloedBorrowing ? 'ENABLED' : 'DISABLED',
            reserveFactor: params.reserveFactor || '',
            asset,
          },
        ];
      }
    }
  }

  return output;
}
