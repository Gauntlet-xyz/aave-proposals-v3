---
title: "Raise Uopt to 90% for USDC, USDT, DAI, FRAX, where applicable, across all v3 deployments"
author: "Gauntlet, Block Analitica"
discussions: "https://governance.aave.com/t/arfc-increase-optimal-borrow-rates-for-ethereum-stablecoin-markets/15096"
---

## Summary

A proposal to make RF and Uopt changes to stablecoins on all V3 deployments and v2 Ethereum. For more details, see the full forum post here.

## Specification

#### Uopt changes

| Market       | Asset | Parameter | Current Value | Recommended Value |
| ------------ | ----- | --------- | ------------- | ----------------- |
| Ethereum v3  | USDT  | Uopt      | 80%           | 90%               |
| Ethereum v3  | FRAX  | Uopt      | 80%           | 90%               |
| Avalanche v3 | USDT  | Uopt      | 80%           | 90%               |
| Avalanche v3 | DAI   | Uopt      | 80%           | 90%               |
| Avalanche v3 | FRAX  | Uopt      | 80%           | 90%               |
| Polygon v3   | USDT  | Uopt      | 80%           | 90%               |
| Polygon v3   | DAI   | Uopt      | 80%           | 90%               |
| Optimism v3  | USDT  | Uopt      | 80%           | 90%               |
| Optimism v3  | DAI   | Uopt      | 80%           | 90%               |
| Arbitrum v3  | USDT  | Uopt      | 80%           | 90%               |
| Arbitrum v3  | DAI   | Uopt      | 80%           | 90%               |
| Arbitrum v3  | FRAX  | Uopt      | 80%           | 90%               |
| Metis v3     | USDT  | Uopt      | 80%           | 90%               |
| Metis v3     | DAI   | Uopt      | 80%           | 90%               |

#### RF changes

| Market      | Asset | Parameter | Current Value | Recommended Value |
| ----------- | ----- | --------- | ------------- | ----------------- |
| Ethereum v2 | USDC  | RF        | 20%           | 25%               |
| Ethereum v2 | USDT  | RF        | 20%           | 25%               |
| Ethereum v2 | LUSD  | RF        | 20%           | 25%               |

## References

- Implementation: [AaveV2Ethereum](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments/AaveV2Ethereum_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116.sol), [AaveV3Ethereum](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments/AaveV3Ethereum_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116.sol), [AaveV3Polygon](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments/AaveV3Polygon_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116.sol), [AaveV3Avalanche](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments/AaveV3Avalanche_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116.sol), [AaveV3Optimism](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments/AaveV3Optimism_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116.sol), [AaveV3Arbitrum](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments/AaveV3Arbitrum_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116.sol), [AaveV3Metis](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments/AaveV3Metis_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116.sol)
- Tests: [AaveV2Ethereum](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments/AaveV2Ethereum_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116.t.sol), [AaveV3Ethereum](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments/AaveV3Ethereum_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116.t.sol), [AaveV3Polygon](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments/AaveV3Polygon_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116.t.sol), [AaveV3Avalanche](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments/AaveV3Avalanche_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116.t.sol), [AaveV3Optimism](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments/AaveV3Optimism_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116.t.sol), [AaveV3Arbitrum](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments/AaveV3Arbitrum_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116.t.sol), [AaveV3Metis](https://github.com/bgd-labs/aave-proposals-v3/blob/main/src/20231116_Multi_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments/AaveV3Metis_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116.t.sol)
- [Snapshot](https://snapshot.org/#/aave.eth/proposal/0xb9b28f57f7633dd6b987de9abcede23da62fe4fab6b002f189b8b25a7c02ea93)
- [Discussion](https://governance.aave.com/t/arfc-increase-optimal-borrow-rates-for-ethereum-stablecoin-markets/15096)

## Disclaimer

Gauntlet and Block Analitica have not received any compensation from any third-party in exchange for recommending any of the actions contained in this proposal.

By approving this proposal, you agree that any services provided by Gauntlet shall be governed by the terms of service available at gauntlet.network/tos.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

_By approving this proposal, you agree that any services provided by Gauntlet shall be governed by the terms of service available at gauntlet.network/tos._
