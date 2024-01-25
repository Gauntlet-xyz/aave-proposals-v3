import {ConfigFile} from '../../generator/types';
export const config: ConfigFile = {
  rootOptions: {
    title: 'Test',
    shortName: 'Test',
    date: '20240125',
    author: 'Tester',
    discussion: 'Test.xyz',
    snapshot: 'Test.com',
    pools: ['AaveV3Optimism', 'AaveV3Ethereum'],
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
          {
            asset: 'WETH',
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
          {
            asset: 'WETH',
            supplyCap: '3',
            borrowCap: '3',
          },
        ],
        COLLATERALS_UPDATE: [
          {
            asset: 'DAI',
            ltv: '3',
            liqThreshold: '3',
            liqBonus: '3',
            debtCeiling: '3',
            liqProtocolFee: '3',
          },
          {
            asset: 'WETH',
            ltv: '3',
            liqThreshold: '3',
            liqBonus: '3',
            debtCeiling: '3',
            liqProtocolFee: '3',
          },
        ],
        BORROWS_UPDATE: [
          {
            enabledToBorrow: 'DISABLED',
            flashloanable: 'DISABLED',
            stableRateModeEnabled: 'ENABLED',
            borrowableInIsolation: 'DISABLED',
            withSiloedBorrowing: 'ENABLED',
            reserveFactor: '3',
            asset: 'DAI',
          },
          {
            enabledToBorrow: 'DISABLED',
            flashloanable: 'DISABLED',
            stableRateModeEnabled: 'ENABLED',
            borrowableInIsolation: 'DISABLED',
            withSiloedBorrowing: 'ENABLED',
            reserveFactor: '3',
            asset: 'WETH',
          },
        ],
      },
      cache: {
        blockNumber: 115311124,
      },
    },
    AaveV3Ethereum: {
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
          {
            asset: 'WETH',
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
          {
            asset: 'WETH',
            supplyCap: '3',
            borrowCap: '3',
          },
        ],
        COLLATERALS_UPDATE: [
          {
            asset: 'DAI',
            ltv: '3',
            liqThreshold: '3',
            liqBonus: '3',
            debtCeiling: '3',
            liqProtocolFee: '3',
          },
          {
            asset: 'WETH',
            ltv: '3',
            liqThreshold: '3',
            liqBonus: '3',
            debtCeiling: '3',
            liqProtocolFee: '3',
          },
        ],
        BORROWS_UPDATE: [
          {
            enabledToBorrow: 'DISABLED',
            flashloanable: 'DISABLED',
            stableRateModeEnabled: 'ENABLED',
            borrowableInIsolation: 'DISABLED',
            withSiloedBorrowing: 'ENABLED',
            reserveFactor: '3',
            asset: 'DAI',
          },
          {
            enabledToBorrow: 'DISABLED',
            flashloanable: 'DISABLED',
            stableRateModeEnabled: 'ENABLED',
            borrowableInIsolation: 'DISABLED',
            withSiloedBorrowing: 'ENABLED',
            reserveFactor: '3',
            asset: 'WETH',
          },
        ],
      },
      cache: {
        blockNumber: 115311124,
      },
    },
  },
};
