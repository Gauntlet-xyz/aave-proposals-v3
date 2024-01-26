import {ConfigFile} from '../../generator/types';
export const config: ConfigFile = {
  rootOptions: {
    title: 'Test',
    shortName: 'Test',
    date: '20240125',
    author: 'Tester',
    discussion: 'Test.xyz',
    snapshot: 'Test.com',
    pools: ['AaveV3Optimism'],
  },
  poolOptions: {
    AaveV3Optimism: {
      configs: {
        RATE_UPDATE_V3: [
          {
            asset: 'DAI',
            params: {
              stableRateSlope1: '3',
              stableRateSlope2: '3',
              optimalUtilizationRate: '3',
              variableRateSlope1: '3',
              variableRateSlope2: '3',
              baseStableRateOffset: '3',
              baseVariableBorrowRate: '3',
              stableRateExcessOffset: '3',
              optimalStableToTotalDebtRatio: '3',
            },
          },
        ],
        CAPS_UPDATE: [
          {
            asset: 'DAI',
            supplyCap: '3',
            borrowCap: '3',
          },
        ],
        COLLATERALS_UPDATE: [
          {
            asset: 'DAI',
            ltv: '',
            liqThreshold: '3',
            liqBonus: '',
            debtCeiling: '3',
            liqProtocolFee: '3',
          },
        ],
        BORROWS_UPDATE: [
          {
            enabledToBorrow: 'KEEP_CURRENT',
            flashloanable: 'KEEP_CURRENT',
            stableRateModeEnabled: 'ENABLED',
            borrowableInIsolation: 'DISABLED',
            withSiloedBorrowing: 'KEEP_CURRENT',
            reserveFactor: '3',
            asset: 'DAI',
          },
        ],
      },
      cache: {
        blockNumber: 115316909,
      },
    },
  },
};
