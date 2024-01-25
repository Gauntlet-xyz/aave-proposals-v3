import {ConfigFile} from '../../generator/types';
export const config: ConfigFile = {
  rootOptions: {
    pools: ['AaveV3Optimism'],
    title: 'Test',
    shortName: 'Test',
    date: '20240125',
    author: 'tester',
    discussion: 'test.com',
    snapshot: 'test.xyz',
  },
  poolOptions: {
    AaveV3Optimism: {
      configs: {
        RATE_UPDATE_V3: [
          {
            asset: 'DAI',
            params: {
              optimalUtilizationRate: '3',
              baseVariableBorrowRate: '3',
              variableRateSlope1: '3',
              variableRateSlope2: '3',
              stableRateSlope1: '3',
              stableRateSlope2: '3',
              baseStableRateOffset: '3',
              stableRateExcessOffset: '3',
              optimalStableToTotalDebtRatio: '3',
            },
          },
        ],
        CAPS_UPDATE: [{asset: 'DAI', supplyCap: '3', borrowCap: '3'}],
        COLLATERALS_UPDATE: [
          {
            asset: 'DAI',
            ltv: '3',
            liqThreshold: '3',
            liqBonus: '3',
            debtCeiling: '3',
            liqProtocolFee: '3',
          },
        ],
        BORROWS_UPDATE: [
          {
            enabledToBorrow: 'ENABLED',
            flashloanable: 'ENABLED',
            stableRateModeEnabled: 'ENABLED',
            borrowableInIsolation: 'ENABLED',
            withSiloedBorrowing: 'ENABLED',
            reserveFactor: '3',
            asset: 'DAI',
          },
        ],
      },
      cache: {blockNumber: 115311124},
    },
  },
};
