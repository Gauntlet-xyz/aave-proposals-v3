---
title: "Increase Stablecoin Optimal Borrow Rates"
author: "Gauntlet, Block Analitica"
discussions: "https://governance.aave.com/t/arfc-increase-optimal-borrow-rates-for-ethereum-stablecoin-markets/15096"
---

## Summary

This AIP proposes to make adjustments to stablecoin interest rate models across Aave v2 and v3 markets. Specifically, this AIP proposes to increase the slope 1 parameter for stablecoins to implement a 5% optimal borrow rate.

## Specification

| Market       | Asset  | Parameter          | Current Value | Recommended Value |
| ------------ | ------ | ------------------ | ------------- | ----------------- |
| Ethereum v2  | USDC   | variableRateSlope1 | 0.035         | 0.05              |
| Ethereum v2  | USDT   | variableRateSlope1 | 0.04          | 0.05              |
| Ethereum v2  | FRAX   | variableRateSlope1 | 0.04          | 0.05              |
| Ethereum v2  | sUSD   | variableRateSlope1 | 0.04          | 0.05              |
| Ethereum v2  | GUSD   | variableRateSlope1 | 0.04          | 0.05              |
| Ethereum v2  | LUSD   | variableRateSlope1 | 0.04          | 0.05              |
| Ethereum v2  | USDP   | variableRateSlope1 | 0.04          | 0.05              |
| Ethereum v3  | USDC   | variableRateSlope1 | 0.035         | 0.05              |
| Ethereum v3  | USDT   | variableRateSlope1 | 0.04          | 0.05              |
| Ethereum v3  | LUSD   | variableRateSlope1 | 0.04          | 0.05              |
| Ethereum v3  | FRAX   | variableRateSlope1 | 0.04          | 0.05              |
| Avalanche v2 | USDC   | variableRateSlope1 | 0.035         | 0.05              |
| Avalanche v2 | USDT   | variableRateSlope1 | 0.04          | 0.05              |
| Avalanche v2 | DAI    | variableRateSlope1 | 0.04          | 0.05              |
| Avalanche v3 | USDC   | variableRateSlope1 | 0.035         | 0.05              |
| Avalanche v3 | USDT   | variableRateSlope1 | 0.04          | 0.05              |
| Avalanche v3 | DAI    | variableRateSlope1 | 0.04          | 0.05              |
| Avalanche v3 | FRAX   | variableRateSlope1 | 0.04          | 0.05              |
| Polygon v2   | USDC   | variableRateSlope1 | 0.035         | 0.05              |
| Polygon v2   | USDT   | variableRateSlope1 | 0.04          | 0.05              |
| Polygon v2   | DAI    | variableRateSlope1 | 0.04          | 0.05              |
| Polygon v3   | USDC   | variableRateSlope1 | 0.035         | 0.05              |
| Polygon v3   | USDT   | variableRateSlope1 | 0.04          | 0.05              |
| Polygon v3   | DAI    | variableRateSlope1 | 0.04          | 0.05              |
| Optimism v3  | USDC   | variableRateSlope1 | 0.035         | 0.05              |
| Optimism v3  | USDT   | variableRateSlope1 | 0.04          | 0.05              |
| Optimism v3  | DAI    | variableRateSlope1 | 0.04          | 0.05              |
| Optimism v3  | sUSD   | variableRateSlope1 | 0.04          | 0.05              |
| Optimism v3  | LUSD   | variableRateSlope1 | 0.04          | 0.05              |
| Arbitrum v3  | USDC   | variableRateSlope1 | 0.035         | 0.05              |
| Arbitrum v3  | USDC.e | variableRateSlope1 | 0.035         | 0.05              |
| Arbitrum v3  | USDT   | variableRateSlope1 | 0.04          | 0.05              |
| Arbitrum v3  | DAI    | variableRateSlope1 | 0.04          | 0.05              |
| Arbitrum v3  | LUSD   | variableRateSlope1 | 0.04          | 0.05              |
| Arbitrum v3  | FRAX   | variableRateSlope1 | 0.04          | 0.05              |
| Base v3      | USDC   | variableRateSlope1 | 0.04          | 0.05              |
| Metis v3     | USDC   | variableRateSlope1 | 0.04          | 0.05              |
| Metis v3     | USDT   | variableRateSlope1 | 0.04          | 0.05              |

## References

- Implementation: [AaveV2Ethereum](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV2Ethereum_IncreaseStablecoinOptimalBorrowRates_20231116.sol), [AaveV3Ethereum](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV3Ethereum_IncreaseStablecoinOptimalBorrowRates_20231116.sol), [AaveV2Avalanche](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV2Avalanche_IncreaseStablecoinOptimalBorrowRates_20231116.sol), [AaveV3Avalanche](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV3Avalanche_IncreaseStablecoinOptimalBorrowRates_20231116.sol), [AaveV2Polygon](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV2Polygon_IncreaseStablecoinOptimalBorrowRates_20231116.sol), [AaveV3Polygon](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV3Polygon_IncreaseStablecoinOptimalBorrowRates_20231116.sol), [AaveV3Optimism](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV3Optimism_IncreaseStablecoinOptimalBorrowRates_20231116.sol), [AaveV3Arbitrum](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV3Arbitrum_IncreaseStablecoinOptimalBorrowRates_20231116.sol), [AaveV3Base](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV3Base_IncreaseStablecoinOptimalBorrowRates_20231116.sol), [AaveV3Metis](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV3Metis_IncreaseStablecoinOptimalBorrowRates_20231116.sol)
- Tests: [AaveV2Ethereum](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV2Ethereum_IncreaseStablecoinOptimalBorrowRates_20231116.t.sol), [AaveV3Ethereum](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV3Ethereum_IncreaseStablecoinOptimalBorrowRates_20231116.t.sol), [AaveV2Avalanche](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV2Avalanche_IncreaseStablecoinOptimalBorrowRates_20231116.t.sol), [AaveV3Avalanche](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV3Avalanche_IncreaseStablecoinOptimalBorrowRates_20231116.t.sol), [AaveV2Polygon](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV2Polygon_IncreaseStablecoinOptimalBorrowRates_20231116.t.sol), [AaveV3Polygon](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV3Polygon_IncreaseStablecoinOptimalBorrowRates_20231116.t.sol), [AaveV3Optimism](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV3Optimism_IncreaseStablecoinOptimalBorrowRates_20231116.t.sol), [AaveV3Arbitrum](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV3Arbitrum_IncreaseStablecoinOptimalBorrowRates_20231116.t.sol), [AaveV3Base](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV3Base_IncreaseStablecoinOptimalBorrowRates_20231116.t.sol), [AaveV3Metis](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/AaveV3Metis_IncreaseStablecoinOptimalBorrowRates_20231116.t.sol)
- [Snapshot](https://snapshot.org/#/aave.eth/proposal/0x914862039828294f4277ad63087ffae295b7693ba365c9036326cca802bfc7af)
- [Discussion](https://governance.aave.com/t/arfc-increase-optimal-borrow-rates-for-ethereum-stablecoin-markets/15096)

## Disclaimer

Gauntlet and Block Analitica have not received any compensation from any third-party in exchange for recommending any of the actions contained in this proposal.

By approving this proposal, you agree that any services provided by Gauntlet shall be governed by the terms of service available at gauntlet.network/tos.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

*By approving this proposal, you agree that any services provided by Gauntlet shall be governed by the terms of service available at gauntlet.network/tos.*
