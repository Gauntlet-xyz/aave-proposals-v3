// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {AaveV3OptimismAssets} from 'aave-address-book/AaveV3Optimism.sol';
import {AaveV3PayloadOptimism} from 'aave-helpers/v3-config-engine/AaveV3PayloadOptimism.sol';
import {EngineFlags} from 'aave-helpers/v3-config-engine/EngineFlags.sol';
import {IAaveV3ConfigEngine} from 'aave-helpers/v3-config-engine/IAaveV3ConfigEngine.sol';
import {IV3RateStrategyFactory} from 'aave-helpers/v3-config-engine/IV3RateStrategyFactory.sol';

/**
 * @title Test
 * @author tester
 * - Snapshot: test.xyz
 * - Discussion: test.com
 */
contract AaveV3Optimism_Test_20240125 is AaveV3PayloadOptimism {
  function rateStrategiesUpdates()
    public
    pure
    override
    returns (IAaveV3ConfigEngine.RateStrategyUpdate[] memory)
  {
    IAaveV3ConfigEngine.RateStrategyUpdate[]
      memory rateStrategies = new IAaveV3ConfigEngine.RateStrategyUpdate[](1);
    rateStrategies[0] = IAaveV3ConfigEngine.RateStrategyUpdate({
      asset: AaveV3OptimismAssets.DAI_UNDERLYING,
      params: IV3RateStrategyFactory.RateStrategyParams({
        optimalUsageRatio: _bpsToRay(3_00),
        baseVariableBorrowRate: _bpsToRay(3_00),
        variableRateSlope1: _bpsToRay(3_00),
        variableRateSlope2: _bpsToRay(3_00),
        stableRateSlope1: _bpsToRay(3_00),
        stableRateSlope2: _bpsToRay(3_00),
        baseStableRateOffset: _bpsToRay(3_00),
        stableRateExcessOffset: _bpsToRay(3_00),
        optimalStableToTotalDebtRatio: _bpsToRay(3_00)
      })
    });

    return rateStrategies;
  }

  function capsUpdates() public pure override returns (IAaveV3ConfigEngine.CapsUpdate[] memory) {
    IAaveV3ConfigEngine.CapsUpdate[] memory capsUpdate = new IAaveV3ConfigEngine.CapsUpdate[](1);

    capsUpdate[0] = IAaveV3ConfigEngine.CapsUpdate({
      asset: AaveV3OptimismAssets.DAI_UNDERLYING,
      supplyCap: 3,
      borrowCap: 3
    });

    return capsUpdate;
  }

  function collateralsUpdates()
    public
    pure
    override
    returns (IAaveV3ConfigEngine.CollateralUpdate[] memory)
  {
    IAaveV3ConfigEngine.CollateralUpdate[]
      memory collateralUpdate = new IAaveV3ConfigEngine.CollateralUpdate[](1);

    collateralUpdate[0] = IAaveV3ConfigEngine.CollateralUpdate({
      asset: AaveV3OptimismAssets.DAI_UNDERLYING,
      ltv: 3_00,
      liqThreshold: 3_00,
      liqBonus: 3_00,
      debtCeiling: 3,
      liqProtocolFee: 3_00
    });

    return collateralUpdate;
  }

  function borrowsUpdates()
    public
    pure
    override
    returns (IAaveV3ConfigEngine.BorrowUpdate[] memory)
  {
    IAaveV3ConfigEngine.BorrowUpdate[]
      memory borrowUpdates = new IAaveV3ConfigEngine.BorrowUpdate[](1);

    borrowUpdates[0] = IAaveV3ConfigEngine.BorrowUpdate({
      asset: AaveV3OptimismAssets.DAI_UNDERLYING,
      enabledToBorrow: EngineFlags.ENABLED,
      flashloanable: EngineFlags.ENABLED,
      stableRateModeEnabled: EngineFlags.ENABLED,
      borrowableInIsolation: EngineFlags.ENABLED,
      withSiloedBorrowing: EngineFlags.ENABLED,
      reserveFactor: 3_00
    });

    return borrowUpdates;
  }
}
