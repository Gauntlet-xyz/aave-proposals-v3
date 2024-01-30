import {ConfigFile} from '../../generator/types';
export const config: ConfigFile = {
  rootOptions: {
    title: 'Test',
    shortName: 'Test',
    date: '20240130',
    author: 'Tester',
    discussion: 'test.xyz',
    snapshot: 'test.com',
    pools: ['AaveV3Ethereum'],
  },
  poolOptions: {
    AaveV3Ethereum: {
      configs: {
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
      },
      cache: {
        blockNumber: 19121773,
      },
    },
  },
};
