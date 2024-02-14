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
        CAPS_UPDATE: [{asset: 'CRV', supplyCap: '12000000', borrowCap: ''}],
        COLLATERALS_UPDATE: [
          {
            asset: 'CRV',
            ltv: '40',
            liqThreshold: '',
            liqBonus: '',
            debtCeiling: '',
            liqProtocolFee: '',
          },
        ],
      },
      cache: {blockNumber: 19229225},
    },
  },
};
