---
title: "Test"
author: "Tester"
discussions: "test.com"
snapshot: "test.xyz"
---

## Simple Summary

A proposal to freeze and set LTV to 0 for DPI, BAL, CRV, and SUSHI on Aave v3 Polygon. For more details, see the full forum post [here](https://governance.aave.com/t/arfc-recommendation-to-freeze-and-set-ltv-to-0-on-low-cap-aave-v3-polygon-collateral-assets/16311).

## Motivation



## Specification

| Asset   |   Current LTV |   Rec LTV | Current is_frozen |Rec is_frozen|
|:--------|-------------:|---------:|---------:|---------:|
| DPI     |         2,000 |     0 |False|True|
| BAL     |         2,000 |     0  |False|True|
| CRV     |         3,500 |     0 |False|True|
| SUSHI     |        2,000  |     0  |False|True|

## References

- Implementation: [AaveV3Ethereum](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20240214_AaveV3Ethereum_Test/AaveV3Ethereum_Test_20240214.sol)
- Tests: [AaveV3Ethereum](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20240214_AaveV3Ethereum_Test/AaveV3Ethereum_Test_20240214.t.sol)
- [Snapshot](test.xyz)
- [Discussion](test.com)

## Disclaimer

Gauntlet has not been compensated by any third party for publishing this ARFC.

## Copyright

_By approving this proposal, you agree that any services provided by Gauntlet shall be governed by the terms of service available at gauntlet.network/tos._

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
