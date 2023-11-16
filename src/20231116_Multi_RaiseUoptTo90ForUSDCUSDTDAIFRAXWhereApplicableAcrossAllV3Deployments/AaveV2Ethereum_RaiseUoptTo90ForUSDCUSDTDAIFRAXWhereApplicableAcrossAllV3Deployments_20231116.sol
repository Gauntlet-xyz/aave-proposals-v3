// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {AaveV2Ethereum, AaveV2EthereumAssets} from 'aave-address-book/AaveV2Ethereum.sol';
import {IProposalGenericExecutor} from 'aave-helpers/interfaces/IProposalGenericExecutor.sol';

/**
 * @title Raise Uopt to 90% for USDC, USDT, DAI, FRAX, where applicable, across all v3 deployments
 * @author Gauntlet, Block Analitica
 * - Snapshot: https://snapshot.org/#/aave.eth/proposal/0xb9b28f57f7633dd6b987de9abcede23da62fe4fab6b002f189b8b25a7c02ea93
 * - Discussion: https://governance.aave.com/t/arfc-increase-optimal-borrow-rates-for-ethereum-stablecoin-markets/15096
 */
contract AaveV2Ethereum_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116 is
  IProposalGenericExecutor
{
  function execute() external {
    AaveV2Ethereum.POOL_CONFIGURATOR.setReserveFactor(AaveV2EthereumAssets.USDC_UNDERLYING, 25_00);
    AaveV2Ethereum.POOL_CONFIGURATOR.setReserveFactor(AaveV2EthereumAssets.USDT_UNDERLYING, 25_00);
    AaveV2Ethereum.POOL_CONFIGURATOR.setReserveFactor(AaveV2EthereumAssets.LUSD_UNDERLYING, 25_00);
  }
}
