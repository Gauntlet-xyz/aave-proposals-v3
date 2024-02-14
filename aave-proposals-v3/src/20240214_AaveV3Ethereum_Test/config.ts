import {ConfigFile} from '../../generator/types';
export const config: ConfigFile = {
  rootOptions: {
    configFile: './config.ts',
    title: 'Test',
    shortName: 'Test',
    date: '20240214',
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
            asset: 'AAVE',
            ltv: '67',
            liqThreshold: '',
            liqBonus: '',
            debtCeiling: '',
            liqProtocolFee: '',
          },
        ],
      },
      cache: {blockNumber: 19223084},
    },
  },
};
