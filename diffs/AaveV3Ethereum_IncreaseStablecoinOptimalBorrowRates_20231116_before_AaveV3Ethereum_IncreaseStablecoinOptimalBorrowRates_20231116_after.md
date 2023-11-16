## Reserve changes

### Reserve altered

#### LUSD ([0x5f98805A4E8be255a32880FDeC7F6728C6568bA0](https://etherscan.io/address/0x5f98805A4E8be255a32880FDeC7F6728C6568bA0))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x349684Da30f8c9Affeaf21AfAB3a1Ad51f5d95A3](https://etherscan.io/address/0x349684Da30f8c9Affeaf21AfAB3a1Ad51f5d95A3) | [0xaDbdb3d6B51151e4CDF32e4050B6F03D2bfB6477](https://etherscan.io/address/0xaDbdb3d6B51151e4CDF32e4050B6F03D2bfB6477) |
| variableRateSlope1 | 4 % | 5 % |
| baseStableBorrowRate | 5 % | 6 % |
| interestRate | ![before](/.assets/43ce89e3d7fc2289843c17d09906ba45f0b42148.svg) | ![after](/.assets/73cbf1aae04d2063059bb0a9bc283ef7a4332ac4.svg) |

#### FRAX ([0x853d955aCEf822Db058eb8505911ED77F175b99e](https://etherscan.io/address/0x853d955aCEf822Db058eb8505911ED77F175b99e))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x694d4cFdaeE639239df949b6E24Ff8576A00d1f2](https://etherscan.io/address/0x694d4cFdaeE639239df949b6E24Ff8576A00d1f2) | [0x44CaDF6E49895640D9De85ac01d97D44429Ad0A4](https://etherscan.io/address/0x44CaDF6E49895640D9De85ac01d97D44429Ad0A4) |
| variableRateSlope1 | 4 % | 5 % |
| baseStableBorrowRate | 5 % | 6 % |
| interestRate | ![before](/.assets/8d9de32bf30b1c9dcf71f07a13b228c69a71a4ce.svg) | ![after](/.assets/9ed0ac5bda0d6aea5b627325dd757aab5a706122.svg) |

#### USDC ([0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48](https://etherscan.io/address/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x8F183Ee74C790CB558232a141099b316D6C8Ba6E](https://etherscan.io/address/0x8F183Ee74C790CB558232a141099b316D6C8Ba6E) | [0x53b13a6D43F647D788411Abfd28D229C274AfBF9](https://etherscan.io/address/0x53b13a6D43F647D788411Abfd28D229C274AfBF9) |
| variableRateSlope1 | 3.5 % | 5 % |
| baseStableBorrowRate | 4.5 % | 6 % |
| interestRate | ![before](/.assets/0372907d0b2f3da48f7adcaed3b1452230cd5c2b.svg) | ![after](/.assets/2054bce529b78cac463f95dc79fc18b65a0c1f44.svg) |

#### USDT ([0xdAC17F958D2ee523a2206206994597C13D831ec7](https://etherscan.io/address/0xdAC17F958D2ee523a2206206994597C13D831ec7))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xC82dF96432346cFb632473eB619Db3B8AC280234](https://etherscan.io/address/0xC82dF96432346cFb632473eB619Db3B8AC280234) | [0x588b62C84533232E3A881e096E5D639Fa754F093](https://etherscan.io/address/0x588b62C84533232E3A881e096E5D639Fa754F093) |
| variableRateSlope1 | 4 % | 5 % |
| baseStableBorrowRate | 5 % | 6 % |
| interestRate | ![before](/.assets/398a9e53757e01d6b0e762e21b88bb93cf4aa95e.svg) | ![after](/.assets/8f352ac66d85aced6acb0053b7c628c46d25cf2d.svg) |

## Raw diff

```json
{
  "reserves": {
    "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0": {
      "interestRateStrategy": {
        "from": "0x349684Da30f8c9Affeaf21AfAB3a1Ad51f5d95A3",
        "to": "0xaDbdb3d6B51151e4CDF32e4050B6F03D2bfB6477"
      }
    },
    "0x853d955aCEf822Db058eb8505911ED77F175b99e": {
      "interestRateStrategy": {
        "from": "0x694d4cFdaeE639239df949b6E24Ff8576A00d1f2",
        "to": "0x44CaDF6E49895640D9De85ac01d97D44429Ad0A4"
      }
    },
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
      "interestRateStrategy": {
        "from": "0x8F183Ee74C790CB558232a141099b316D6C8Ba6E",
        "to": "0x53b13a6D43F647D788411Abfd28D229C274AfBF9"
      }
    },
    "0xdAC17F958D2ee523a2206206994597C13D831ec7": {
      "interestRateStrategy": {
        "from": "0xC82dF96432346cFb632473eB619Db3B8AC280234",
        "to": "0x588b62C84533232E3A881e096E5D639Fa754F093"
      }
    }
  },
  "strategies": {
    "0x44CaDF6E49895640D9De85ac01d97D44429Ad0A4": {
      "from": null,
      "to": {
        "baseStableBorrowRate": "60000000000000000000000000",
        "baseVariableBorrowRate": 0,
        "maxExcessStableToTotalDebtRatio": "800000000000000000000000000",
        "maxExcessUsageRatio": "200000000000000000000000000",
        "optimalStableToTotalDebtRatio": "200000000000000000000000000",
        "optimalUsageRatio": "800000000000000000000000000",
        "stableRateSlope1": "5000000000000000000000000",
        "stableRateSlope2": "750000000000000000000000000",
        "variableRateSlope1": "50000000000000000000000000",
        "variableRateSlope2": "750000000000000000000000000"
      }
    },
    "0x53b13a6D43F647D788411Abfd28D229C274AfBF9": {
      "from": null,
      "to": {
        "baseStableBorrowRate": "60000000000000000000000000",
        "baseVariableBorrowRate": 0,
        "maxExcessStableToTotalDebtRatio": "800000000000000000000000000",
        "maxExcessUsageRatio": "100000000000000000000000000",
        "optimalStableToTotalDebtRatio": "200000000000000000000000000",
        "optimalUsageRatio": "900000000000000000000000000",
        "stableRateSlope1": "5000000000000000000000000",
        "stableRateSlope2": "600000000000000000000000000",
        "variableRateSlope1": "50000000000000000000000000",
        "variableRateSlope2": "600000000000000000000000000"
      }
    },
    "0x588b62C84533232E3A881e096E5D639Fa754F093": {
      "from": null,
      "to": {
        "baseStableBorrowRate": "60000000000000000000000000",
        "baseVariableBorrowRate": 0,
        "maxExcessStableToTotalDebtRatio": "800000000000000000000000000",
        "maxExcessUsageRatio": "200000000000000000000000000",
        "optimalStableToTotalDebtRatio": "200000000000000000000000000",
        "optimalUsageRatio": "800000000000000000000000000",
        "stableRateSlope1": "40000000000000000000000000",
        "stableRateSlope2": "720000000000000000000000000",
        "variableRateSlope1": "50000000000000000000000000",
        "variableRateSlope2": "750000000000000000000000000"
      }
    },
    "0xaDbdb3d6B51151e4CDF32e4050B6F03D2bfB6477": {
      "from": null,
      "to": {
        "baseStableBorrowRate": "60000000000000000000000000",
        "baseVariableBorrowRate": 0,
        "maxExcessStableToTotalDebtRatio": "800000000000000000000000000",
        "maxExcessUsageRatio": "200000000000000000000000000",
        "optimalStableToTotalDebtRatio": "200000000000000000000000000",
        "optimalUsageRatio": "800000000000000000000000000",
        "stableRateSlope1": "40000000000000000000000000",
        "stableRateSlope2": "870000000000000000000000000",
        "variableRateSlope1": "50000000000000000000000000",
        "variableRateSlope2": "870000000000000000000000000"
      }
    }
  }
}
```