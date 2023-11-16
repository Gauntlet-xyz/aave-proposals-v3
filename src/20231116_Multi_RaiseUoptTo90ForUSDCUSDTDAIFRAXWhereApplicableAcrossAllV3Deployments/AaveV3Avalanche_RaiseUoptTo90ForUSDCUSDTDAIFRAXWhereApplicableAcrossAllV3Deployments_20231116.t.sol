// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {AaveV3Avalanche} from 'aave-address-book/AaveV3Avalanche.sol';

import 'forge-std/Test.sol';
import {ProtocolV3TestBase, ReserveConfig} from 'aave-helpers/ProtocolV3TestBase.sol';
import {AaveV3Avalanche_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116} from './AaveV3Avalanche_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116.sol';

/**
 * @dev Test for AaveV3Avalanche_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116
 * command: make test-contract filter=AaveV3Avalanche_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116
 */
contract AaveV3Avalanche_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116_Test is
  ProtocolV3TestBase
{
  AaveV3Avalanche_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116
    internal proposal;

  function setUp() public {
    vm.createSelectFork(vm.rpcUrl('avalanche'), 37851533);
    proposal = new AaveV3Avalanche_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116();
  }

  /**
   * @dev executes the generic test suite including e2e and config snapshots
   */
  function test_defaultProposalExecution() public {
    defaultTest(
      'AaveV3Avalanche_RaiseUoptTo90ForUSDCUSDTDAIFRAXWhereApplicableAcrossAllV3Deployments_20231116',
      AaveV3Avalanche.POOL,
      address(proposal)
    );
  }
}
