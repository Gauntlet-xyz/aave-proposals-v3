## Reserve changes

### Reserve altered

#### USDT ([0x94b008aA00579c1307B0EF2c499aD98a8ce58e58](https://explorer.optimism.io/address/0x94b008aA00579c1307B0EF2c499aD98a8ce58e58))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xA9F3C3caE095527061e6d270DBE163693e6fda9D](https://explorer.optimism.io/address/0xA9F3C3caE095527061e6d270DBE163693e6fda9D) | [0x3832311560d3B457E9cC35e5b8e06EB167D8c17D](https://explorer.optimism.io/address/0x3832311560d3B457E9cC35e5b8e06EB167D8c17D) |
| optimalUsageRatio | 80 % | 90 % |
| maxExcessUsageRatio | 20 % | 10 % |
| interestRate | ![before](/.assets/8d9de32bf30b1c9dcf71f07a13b228c69a71a4ce.svg) | ![after](/.assets/577360009ed79d63299cf66d8c80048372f3e17b.svg) |

#### DAI ([0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1](https://explorer.optimism.io/address/0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xA9F3C3caE095527061e6d270DBE163693e6fda9D](https://explorer.optimism.io/address/0xA9F3C3caE095527061e6d270DBE163693e6fda9D) | [0x6D6D3b7FC50999bf20dE5CC8e0F63AFD18B95f0e](https://explorer.optimism.io/address/0x6D6D3b7FC50999bf20dE5CC8e0F63AFD18B95f0e) |
| optimalUsageRatio | 80 % | 90 % |
| maxExcessUsageRatio | 20 % | 10 % |
| variableRateSlope1 | 4 % | 0 % |
| baseStableBorrowRate | 5 % | 1 % |
| interestRate | ![before](/.assets/8d9de32bf30b1c9dcf71f07a13b228c69a71a4ce.svg) | ![after](/.assets/ef9c259cb3204856ff66883fa069d750c84650b1.svg) |

## Raw diff

```json
{
  "reserves": {
    "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58": {
      "interestRateStrategy": {
        "from": "0xA9F3C3caE095527061e6d270DBE163693e6fda9D",
        "to": "0x3832311560d3B457E9cC35e5b8e06EB167D8c17D"
      }
    },
    "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1": {
      "interestRateStrategy": {
        "from": "0xA9F3C3caE095527061e6d270DBE163693e6fda9D",
        "to": "0x6D6D3b7FC50999bf20dE5CC8e0F63AFD18B95f0e"
      }
    }
  },
  "strategies": {
    "0x3832311560d3B457E9cC35e5b8e06EB167D8c17D": {
      "from": null,
      "to": {
        "baseStableBorrowRate": "50000000000000000000000000",
        "baseVariableBorrowRate": 0,
        "maxExcessStableToTotalDebtRatio": "800000000000000000000000000",
        "maxExcessUsageRatio": "100000000000000000000000000",
        "optimalStableToTotalDebtRatio": "200000000000000000000000000",
        "optimalUsageRatio": "900000000000000000000000000",
        "stableRateSlope1": "5000000000000000000000000",
        "stableRateSlope2": "750000000000000000000000000",
        "variableRateSlope1": "40000000000000000000000000",
        "variableRateSlope2": "750000000000000000000000000"
      }
    },
    "0x6D6D3b7FC50999bf20dE5CC8e0F63AFD18B95f0e": {
      "from": null,
      "to": {
        "baseStableBorrowRate": "10000000000000000000000000",
        "baseVariableBorrowRate": 0,
        "maxExcessStableToTotalDebtRatio": "800000000000000000000000000",
        "maxExcessUsageRatio": "100000000000000000000000000",
        "optimalStableToTotalDebtRatio": "200000000000000000000000000",
        "optimalUsageRatio": "900000000000000000000000000",
        "stableRateSlope1": "5000000000000000000000000",
        "stableRateSlope2": "750000000000000000000000000",
        "variableRateSlope1": 0,
        "variableRateSlope2": "750000000000000000000000000"
      }
    }
  }
}
```