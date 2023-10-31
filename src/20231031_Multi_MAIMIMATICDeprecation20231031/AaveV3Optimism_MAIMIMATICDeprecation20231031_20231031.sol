// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {AaveV3OptimismAssets} from 'aave-address-book/AaveV3Optimism.sol';
import {AaveV3PayloadOptimism} from 'aave-helpers/v3-config-engine/AaveV3PayloadOptimism.sol';
import {EngineFlags} from 'aave-helpers/v3-config-engine/EngineFlags.sol';
import {IAaveV3ConfigEngine} from 'aave-helpers/v3-config-engine/IAaveV3ConfigEngine.sol';
import {IV3RateStrategyFactory} from 'aave-helpers/v3-config-engine/IV3RateStrategyFactory.sol';

/**
 * @title MAI/MIMATIC deprecation, 2023.10.31
 * @author Gauntlet
 * - Snapshot: TODO
 * - Discussion: https://governance.aave.com/t/arfc-gauntlet-recommendation-for-mai-mimatic-deprecation/15119
 */
contract AaveV3Optimism_MAIMIMATICDeprecation20231031_20231031 is AaveV3PayloadOptimism {
  function rateStrategiesUpdates()
    public
    pure
    override
    returns (IAaveV3ConfigEngine.RateStrategyUpdate[] memory)
  {
    IAaveV3ConfigEngine.RateStrategyUpdate[]
      memory rateStrategies = new IAaveV3ConfigEngine.RateStrategyUpdate[](1);
    rateStrategies[0] = IAaveV3ConfigEngine.RateStrategyUpdate({
      asset: AaveV3OptimismAssets.MAI_UNDERLYING,
      params: IV3RateStrategyFactory.RateStrategyParams({
        optimalUsageRatio: _bpsToRay(45_00),
        baseVariableBorrowRate: EngineFlags.KEEP_CURRENT,
        variableRateSlope1: EngineFlags.KEEP_CURRENT,
        variableRateSlope2: _bpsToRay(300_00),
        stableRateSlope1: EngineFlags.KEEP_CURRENT,
        stableRateSlope2: EngineFlags.KEEP_CURRENT,
        baseStableRateOffset: EngineFlags.KEEP_CURRENT,
        stableRateExcessOffset: EngineFlags.KEEP_CURRENT,
        optimalStableToTotalDebtRatio: EngineFlags.KEEP_CURRENT
      })
    });

    return rateStrategies;
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
      asset: AaveV3OptimismAssets.MAI_UNDERLYING,
      ltv: EngineFlags.KEEP_CURRENT,
      liqThreshold: 65_00,
      liqBonus: EngineFlags.KEEP_CURRENT,
      debtCeiling: EngineFlags.KEEP_CURRENT,
      liqProtocolFee: EngineFlags.KEEP_CURRENT
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
      asset: AaveV3OptimismAssets.MAI_UNDERLYING,
      enabledToBorrow: EngineFlags.KEEP_CURRENT,
      flashloanable: EngineFlags.KEEP_CURRENT,
      stableRateModeEnabled: EngineFlags.KEEP_CURRENT,
      borrowableInIsolation: EngineFlags.KEEP_CURRENT,
      withSiloedBorrowing: EngineFlags.KEEP_CURRENT,
      reserveFactor: 95_00
    });

    return borrowUpdates;
  }
}