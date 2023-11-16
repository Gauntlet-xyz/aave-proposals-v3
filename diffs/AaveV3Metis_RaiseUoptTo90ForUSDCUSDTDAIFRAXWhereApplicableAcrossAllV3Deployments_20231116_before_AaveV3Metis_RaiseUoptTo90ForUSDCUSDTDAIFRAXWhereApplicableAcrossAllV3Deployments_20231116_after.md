## Reserve changes

### Reserve altered

#### m.DAI ([0x4c078361FC9BbB78DF910800A991C7c3DD2F6ce0](https://andromeda-explorer.metis.io/address/0x4c078361FC9BbB78DF910800A991C7c3DD2F6ce0))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x4a8de3E62B4a63905f62e56292ECdCfD3593d1c9](https://andromeda-explorer.metis.io/address/0x4a8de3E62B4a63905f62e56292ECdCfD3593d1c9) | [0x3c8DF161A59F2a3ed4D40F073395d6a0f14290C0](https://andromeda-explorer.metis.io/address/0x3c8DF161A59F2a3ed4D40F073395d6a0f14290C0) |
| optimalUsageRatio | 80 % | 90 % |
| maxExcessUsageRatio | 20 % | 10 % |
| interestRate | ![before](/.assets/748a0eb71635793f12d6014b9e935c2b6858d00b.svg) | ![after](/.assets/da3b368705d0caf204c10ce9c2dda8d3b8cf9c11.svg) |

#### m.USDT ([0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC](https://andromeda-explorer.metis.io/address/0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x5A1bdAc4eBa2A70D465ef4aDd2f68dBBae183454](https://andromeda-explorer.metis.io/address/0x5A1bdAc4eBa2A70D465ef4aDd2f68dBBae183454) | [0x082612269926F85741E6c2B0447D000469880c1C](https://andromeda-explorer.metis.io/address/0x082612269926F85741E6c2B0447D000469880c1C) |
| optimalUsageRatio | 80 % | 90 % |
| maxExcessUsageRatio | 20 % | 10 % |
| interestRate | ![before](/.assets/8d9de32bf30b1c9dcf71f07a13b228c69a71a4ce.svg) | ![after](/.assets/577360009ed79d63299cf66d8c80048372f3e17b.svg) |

## Raw diff

```json
{
  "reserves": {
    "0x4c078361FC9BbB78DF910800A991C7c3DD2F6ce0": {
      "interestRateStrategy": {
        "from": "0x4a8de3E62B4a63905f62e56292ECdCfD3593d1c9",
        "to": "0x3c8DF161A59F2a3ed4D40F073395d6a0f14290C0"
      }
    },
    "0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC": {
      "interestRateStrategy": {
        "from": "0x5A1bdAc4eBa2A70D465ef4aDd2f68dBBae183454",
        "to": "0x082612269926F85741E6c2B0447D000469880c1C"
      }
    }
  },
  "strategies": {
    "0x082612269926F85741E6c2B0447D000469880c1C": {
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
    "0x3c8DF161A59F2a3ed4D40F073395d6a0f14290C0": {
      "from": null,
      "to": {
        "baseStableBorrowRate": "80000000000000000000000000",
        "baseVariableBorrowRate": 0,
        "maxExcessStableToTotalDebtRatio": "800000000000000000000000000",
        "maxExcessUsageRatio": "100000000000000000000000000",
        "optimalStableToTotalDebtRatio": "200000000000000000000000000",
        "optimalUsageRatio": "900000000000000000000000000",
        "stableRateSlope1": "5000000000000000000000000",
        "stableRateSlope2": "750000000000000000000000000",
        "variableRateSlope1": "70000000000000000000000000",
        "variableRateSlope2": "750000000000000000000000000"
      }
    }
  }
}
```