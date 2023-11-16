// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {GovV3Helpers, IPayloadsControllerCore, PayloadsControllerUtils} from 'aave-helpers/GovV3Helpers.sol';
import {EthereumScript, AvalancheScript, PolygonScript, OptimismScript, ArbitrumScript, BaseScript, MetisScript} from 'aave-helpers/ScriptUtils.sol';
import {AaveV2Ethereum_IncreaseStablecoinOptimalBorrowRates_20231116} from './AaveV2Ethereum_IncreaseStablecoinOptimalBorrowRates_20231116.sol';
import {AaveV3Ethereum_IncreaseStablecoinOptimalBorrowRates_20231116} from './AaveV3Ethereum_IncreaseStablecoinOptimalBorrowRates_20231116.sol';
import {AaveV2Avalanche_IncreaseStablecoinOptimalBorrowRates_20231116} from './AaveV2Avalanche_IncreaseStablecoinOptimalBorrowRates_20231116.sol';
import {AaveV3Avalanche_IncreaseStablecoinOptimalBorrowRates_20231116} from './AaveV3Avalanche_IncreaseStablecoinOptimalBorrowRates_20231116.sol';
import {AaveV2Polygon_IncreaseStablecoinOptimalBorrowRates_20231116} from './AaveV2Polygon_IncreaseStablecoinOptimalBorrowRates_20231116.sol';
import {AaveV3Polygon_IncreaseStablecoinOptimalBorrowRates_20231116} from './AaveV3Polygon_IncreaseStablecoinOptimalBorrowRates_20231116.sol';
import {AaveV3Optimism_IncreaseStablecoinOptimalBorrowRates_20231116} from './AaveV3Optimism_IncreaseStablecoinOptimalBorrowRates_20231116.sol';
import {AaveV3Arbitrum_IncreaseStablecoinOptimalBorrowRates_20231116} from './AaveV3Arbitrum_IncreaseStablecoinOptimalBorrowRates_20231116.sol';
import {AaveV3Base_IncreaseStablecoinOptimalBorrowRates_20231116} from './AaveV3Base_IncreaseStablecoinOptimalBorrowRates_20231116.sol';
import {AaveV3Metis_IncreaseStablecoinOptimalBorrowRates_20231116} from './AaveV3Metis_IncreaseStablecoinOptimalBorrowRates_20231116.sol';

/**
 * @dev Deploy Ethereum
 * command: make deploy-ledger contract=src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/IncreaseStablecoinOptimalBorrowRates_20231116.s.sol:DeployEthereum chain=mainnet
 */
contract DeployEthereum is EthereumScript {
  function run() external broadcast {
    // deploy payloads
    AaveV2Ethereum_IncreaseStablecoinOptimalBorrowRates_20231116 payload0 = new AaveV2Ethereum_IncreaseStablecoinOptimalBorrowRates_20231116();
    AaveV3Ethereum_IncreaseStablecoinOptimalBorrowRates_20231116 payload1 = new AaveV3Ethereum_IncreaseStablecoinOptimalBorrowRates_20231116();

    // compose action
    IPayloadsControllerCore.ExecutionAction[]
      memory actions = new IPayloadsControllerCore.ExecutionAction[](2);
    actions[0] = GovV3Helpers.buildAction(address(payload0));
    actions[1] = GovV3Helpers.buildAction(address(payload1));

    // register action at payloadsController
    GovV3Helpers.createPayload(actions);
  }
}

/**
 * @dev Deploy Avalanche
 * command: make deploy-ledger contract=src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/IncreaseStablecoinOptimalBorrowRates_20231116.s.sol:DeployAvalanche chain=avalanche
 */
contract DeployAvalanche is AvalancheScript {
  function run() external broadcast {
    // deploy payloads
    AaveV2Avalanche_IncreaseStablecoinOptimalBorrowRates_20231116 payload0 = new AaveV2Avalanche_IncreaseStablecoinOptimalBorrowRates_20231116();
    AaveV3Avalanche_IncreaseStablecoinOptimalBorrowRates_20231116 payload1 = new AaveV3Avalanche_IncreaseStablecoinOptimalBorrowRates_20231116();

    // compose action
    IPayloadsControllerCore.ExecutionAction[]
      memory actions = new IPayloadsControllerCore.ExecutionAction[](2);
    actions[0] = GovV3Helpers.buildAction(address(payload0));
    actions[1] = GovV3Helpers.buildAction(address(payload1));

    // register action at payloadsController
    GovV3Helpers.createPayload(actions);
  }
}

/**
 * @dev Deploy Polygon
 * command: make deploy-ledger contract=src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/IncreaseStablecoinOptimalBorrowRates_20231116.s.sol:DeployPolygon chain=polygon
 */
contract DeployPolygon is PolygonScript {
  function run() external broadcast {
    // deploy payloads
    AaveV2Polygon_IncreaseStablecoinOptimalBorrowRates_20231116 payload0 = new AaveV2Polygon_IncreaseStablecoinOptimalBorrowRates_20231116();
    AaveV3Polygon_IncreaseStablecoinOptimalBorrowRates_20231116 payload1 = new AaveV3Polygon_IncreaseStablecoinOptimalBorrowRates_20231116();

    // compose action
    IPayloadsControllerCore.ExecutionAction[]
      memory actions = new IPayloadsControllerCore.ExecutionAction[](2);
    actions[0] = GovV3Helpers.buildAction(address(payload0));
    actions[1] = GovV3Helpers.buildAction(address(payload1));

    // register action at payloadsController
    GovV3Helpers.createPayload(actions);
  }
}

/**
 * @dev Deploy Optimism
 * command: make deploy-ledger contract=src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/IncreaseStablecoinOptimalBorrowRates_20231116.s.sol:DeployOptimism chain=optimism
 */
contract DeployOptimism is OptimismScript {
  function run() external broadcast {
    // deploy payloads
    AaveV3Optimism_IncreaseStablecoinOptimalBorrowRates_20231116 payload0 = new AaveV3Optimism_IncreaseStablecoinOptimalBorrowRates_20231116();

    // compose action
    IPayloadsControllerCore.ExecutionAction[]
      memory actions = new IPayloadsControllerCore.ExecutionAction[](1);
    actions[0] = GovV3Helpers.buildAction(address(payload0));

    // register action at payloadsController
    GovV3Helpers.createPayload(actions);
  }
}

/**
 * @dev Deploy Arbitrum
 * command: make deploy-ledger contract=src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/IncreaseStablecoinOptimalBorrowRates_20231116.s.sol:DeployArbitrum chain=arbitrum
 */
contract DeployArbitrum is ArbitrumScript {
  function run() external broadcast {
    // deploy payloads
    AaveV3Arbitrum_IncreaseStablecoinOptimalBorrowRates_20231116 payload0 = new AaveV3Arbitrum_IncreaseStablecoinOptimalBorrowRates_20231116();

    // compose action
    IPayloadsControllerCore.ExecutionAction[]
      memory actions = new IPayloadsControllerCore.ExecutionAction[](1);
    actions[0] = GovV3Helpers.buildAction(address(payload0));

    // register action at payloadsController
    GovV3Helpers.createPayload(actions);
  }
}

/**
 * @dev Deploy Base
 * command: make deploy-ledger contract=src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/IncreaseStablecoinOptimalBorrowRates_20231116.s.sol:DeployBase chain=base
 */
contract DeployBase is BaseScript {
  function run() external broadcast {
    // deploy payloads
    AaveV3Base_IncreaseStablecoinOptimalBorrowRates_20231116 payload0 = new AaveV3Base_IncreaseStablecoinOptimalBorrowRates_20231116();

    // compose action
    IPayloadsControllerCore.ExecutionAction[]
      memory actions = new IPayloadsControllerCore.ExecutionAction[](1);
    actions[0] = GovV3Helpers.buildAction(address(payload0));

    // register action at payloadsController
    GovV3Helpers.createPayload(actions);
  }
}

/**
 * @dev Deploy Metis
 * command: make deploy-ledger contract=src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/IncreaseStablecoinOptimalBorrowRates_20231116.s.sol:DeployMetis chain=metis
 */
contract DeployMetis is MetisScript {
  function run() external broadcast {
    // deploy payloads
    AaveV3Metis_IncreaseStablecoinOptimalBorrowRates_20231116 payload0 = new AaveV3Metis_IncreaseStablecoinOptimalBorrowRates_20231116();

    // compose action
    IPayloadsControllerCore.ExecutionAction[]
      memory actions = new IPayloadsControllerCore.ExecutionAction[](1);
    actions[0] = GovV3Helpers.buildAction(address(payload0));

    // register action at payloadsController
    GovV3Helpers.createPayload(actions);
  }
}

/**
 * @dev Create Proposal
 * command: make deploy-ledger contract=src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/IncreaseStablecoinOptimalBorrowRates_20231116.s.sol:CreateProposal chain=mainnet
 */
contract CreateProposal is EthereumScript {
  function run() external {
    // create payloads
    PayloadsControllerUtils.Payload[] memory payloads = new PayloadsControllerUtils.Payload[](7);

    // compose actions for validation
    IPayloadsControllerCore.ExecutionAction[]
      memory actionsEthereum = new IPayloadsControllerCore.ExecutionAction[](2);
    actionsEthereum[0] = GovV3Helpers.buildAction(address(0));
    actionsEthereum[1] = GovV3Helpers.buildAction(address(0));
    payloads[0] = GovV3Helpers.buildMainnetPayload(vm, actionsEthereum);

    IPayloadsControllerCore.ExecutionAction[]
      memory actionsAvalanche = new IPayloadsControllerCore.ExecutionAction[](2);
    actionsAvalanche[0] = GovV3Helpers.buildAction(address(0));
    actionsAvalanche[1] = GovV3Helpers.buildAction(address(0));
    payloads[1] = GovV3Helpers.buildAvalanchePayload(vm, actionsAvalanche);

    IPayloadsControllerCore.ExecutionAction[]
      memory actionsPolygon = new IPayloadsControllerCore.ExecutionAction[](2);
    actionsPolygon[0] = GovV3Helpers.buildAction(address(0));
    actionsPolygon[1] = GovV3Helpers.buildAction(address(0));
    payloads[2] = GovV3Helpers.buildPolygonPayload(vm, actionsPolygon);

    IPayloadsControllerCore.ExecutionAction[]
      memory actionsOptimism = new IPayloadsControllerCore.ExecutionAction[](1);
    actionsOptimism[0] = GovV3Helpers.buildAction(address(0));
    payloads[3] = GovV3Helpers.buildOptimismPayload(vm, actionsOptimism);

    IPayloadsControllerCore.ExecutionAction[]
      memory actionsArbitrum = new IPayloadsControllerCore.ExecutionAction[](1);
    actionsArbitrum[0] = GovV3Helpers.buildAction(address(0));
    payloads[4] = GovV3Helpers.buildArbitrumPayload(vm, actionsArbitrum);

    IPayloadsControllerCore.ExecutionAction[]
      memory actionsBase = new IPayloadsControllerCore.ExecutionAction[](1);
    actionsBase[0] = GovV3Helpers.buildAction(address(0));
    payloads[5] = GovV3Helpers.buildBasePayload(vm, actionsBase);

    IPayloadsControllerCore.ExecutionAction[]
      memory actionsMetis = new IPayloadsControllerCore.ExecutionAction[](1);
    actionsMetis[0] = GovV3Helpers.buildAction(address(0));
    payloads[6] = GovV3Helpers.buildMetisPayload(vm, actionsMetis);

    // create proposal
    vm.startBroadcast();
    GovV3Helpers.createProposal2_5(
      payloads,
      GovV3Helpers.ipfsHashFile(
        vm,
        'src/20231116_Multi_IncreaseStablecoinOptimalBorrowRates/IncreaseStablecoinOptimalBorrowRates.md'
      )
    );
  }
}