import {ConfigFile} from '../../generator/types';
export const config: ConfigFile = {
  rootOptions: {
    title: 'Test',
    shortName: 'Test',
    date: '20240129',
    author: 'Tester',
    discussion: 'test.xyz',
    snapshot: 'test.com',
    pools: ['AaveV3Ethereum'],
  },
  poolOptions: {
    AaveV3Ethereum: {
      configs: {
        CAPS_UPDATE: [
          {
            asset: 'DAI',
            supplyCap: '200000000',
            borrowCap: '400000000',
          },
        ],
        COLLATERALS_UPDATE: [
          {
            asset: 'DAI',
            ltv: '70',
            liqThreshold: '',
            liqBonus: '',
            debtCeiling: '',
            liqProtocolFee: '',
          },
        ],
        BORROWS_UPDATE: [
          {
            enabledToBorrow: 'KEEP_CURRENT',
            flashloanable: 'KEEP_CURRENT',
            stableRateModeEnabled: 'KEEP_CURRENT',
            borrowableInIsolation: 'KEEP_CURRENT',
            withSiloedBorrowing: 'ENABLED',
            reserveFactor: '',
            asset: 'DAI',
          },
        ],
      },
      cache: {
        blockNumber: 19116748,
      },
    },
  },
};
