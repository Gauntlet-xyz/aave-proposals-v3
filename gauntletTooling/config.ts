import {ConfigFile} from '../../generator/types';
export const config: ConfigFile = {
  rootOptions: {
    title: 'Test',
    shortName: 'Test',
    date: '20240131',
    author: 'Tester',
    discussion: 'test.com',
    snapshot: 'test.xyz',
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
        blockNumber: 19129883,
      },
    },
  },
};
