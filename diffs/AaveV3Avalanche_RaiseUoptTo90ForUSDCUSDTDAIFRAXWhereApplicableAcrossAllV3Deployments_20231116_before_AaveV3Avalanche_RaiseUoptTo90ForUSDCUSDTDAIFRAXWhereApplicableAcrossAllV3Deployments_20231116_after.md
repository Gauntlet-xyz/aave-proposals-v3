## Reserve changes

### Reserve altered

#### USDt ([0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7](https://snowtrace.io/address/0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xfab05a6aF585da2F96e21452F91E812452996BD3](https://snowtrace.io/address/0xfab05a6aF585da2F96e21452F91E812452996BD3) | [0x04daBC3C1c052AB94AA2ca80140f2b978d2F6E17](https://snowtrace.io/address/0x04daBC3C1c052AB94AA2ca80140f2b978d2F6E17) |
| optimalUsageRatio | 80 % | 90 % |
| maxExcessUsageRatio | 20 % | 10 % |
| interestRate | ![before](/.assets/8d9de32bf30b1c9dcf71f07a13b228c69a71a4ce.svg) | ![after](/.assets/577360009ed79d63299cf66d8c80048372f3e17b.svg) |

#### FRAX ([0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64](https://snowtrace.io/address/0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xfab05a6aF585da2F96e21452F91E812452996BD3](https://snowtrace.io/address/0xfab05a6aF585da2F96e21452F91E812452996BD3) | [0x04daBC3C1c052AB94AA2ca80140f2b978d2F6E17](https://snowtrace.io/address/0x04daBC3C1c052AB94AA2ca80140f2b978d2F6E17) |
| optimalUsageRatio | 80 % | 90 % |
| maxExcessUsageRatio | 20 % | 10 % |
| interestRate | ![before](/.assets/8d9de32bf30b1c9dcf71f07a13b228c69a71a4ce.svg) | ![after](/.assets/577360009ed79d63299cf66d8c80048372f3e17b.svg) |

#### DAI.e ([0xd586E7F844cEa2F87f50152665BCbc2C279D8d70](https://snowtrace.io/address/0xd586E7F844cEa2F87f50152665BCbc2C279D8d70))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xfab05a6aF585da2F96e21452F91E812452996BD3](https://snowtrace.io/address/0xfab05a6aF585da2F96e21452F91E812452996BD3) | [0x04daBC3C1c052AB94AA2ca80140f2b978d2F6E17](https://snowtrace.io/address/0x04daBC3C1c052AB94AA2ca80140f2b978d2F6E17) |
| optimalUsageRatio | 80 % | 90 % |
| maxExcessUsageRatio | 20 % | 10 % |
| interestRate | ![before](/.assets/8d9de32bf30b1c9dcf71f07a13b228c69a71a4ce.svg) | ![after](/.assets/577360009ed79d63299cf66d8c80048372f3e17b.svg) |

## Raw diff

```json
{
  "reserves": {
    "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7": {
      "interestRateStrategy": {
        "from": "0xfab05a6aF585da2F96e21452F91E812452996BD3",
        "to": "0x04daBC3C1c052AB94AA2ca80140f2b978d2F6E17"
      }
    },
    "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64": {
      "interestRateStrategy": {
        "from": "0xfab05a6aF585da2F96e21452F91E812452996BD3",
        "to": "0x04daBC3C1c052AB94AA2ca80140f2b978d2F6E17"
      }
    },
    "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70": {
      "interestRateStrategy": {
        "from": "0xfab05a6aF585da2F96e21452F91E812452996BD3",
        "to": "0x04daBC3C1c052AB94AA2ca80140f2b978d2F6E17"
      }
    }
  },
  "strategies": {
    "0x04daBC3C1c052AB94AA2ca80140f2b978d2F6E17": {
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
    }
  }
}
```