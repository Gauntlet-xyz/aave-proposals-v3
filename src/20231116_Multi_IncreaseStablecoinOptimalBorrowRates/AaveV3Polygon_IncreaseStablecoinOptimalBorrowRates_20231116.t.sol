// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {AaveV3Polygon} from 'aave-address-book/AaveV3Polygon.sol';

import 'forge-std/Test.sol';
import {ProtocolV3TestBase, ReserveConfig} from 'aave-helpers/ProtocolV3TestBase.sol';
import {AaveV3Polygon_IncreaseStablecoinOptimalBorrowRates_20231116} from './AaveV3Polygon_IncreaseStablecoinOptimalBorrowRates_20231116.sol';

/**
 * @dev Test for AaveV3Polygon_IncreaseStablecoinOptimalBorrowRates_20231116
 * command: make test-contract filter=AaveV3Polygon_IncreaseStablecoinOptimalBorrowRates_20231116
 */
contract AaveV3Polygon_IncreaseStablecoinOptimalBorrowRates_20231116_Test is ProtocolV3TestBase {
  AaveV3Polygon_IncreaseStablecoinOptimalBorrowRates_20231116 internal proposal;

  function setUp() public {
    vm.createSelectFork(vm.rpcUrl('polygon'), 50026194);
    proposal = new AaveV3Polygon_IncreaseStablecoinOptimalBorrowRates_20231116();
  }

  /**
   * @dev executes the generic test suite including e2e and config snapshots
   */
  function test_defaultProposalExecution() public {
    defaultTest(
      'AaveV3Polygon_IncreaseStablecoinOptimalBorrowRates_20231116',
      AaveV3Polygon.POOL,
      address(proposal)
    );
  }
}
