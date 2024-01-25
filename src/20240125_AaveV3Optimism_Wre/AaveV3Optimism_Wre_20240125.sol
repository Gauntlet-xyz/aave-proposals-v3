// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {AaveV3OptimismAssets} from 'aave-address-book/AaveV3Optimism.sol';
import {AaveV3PayloadOptimism} from 'aave-helpers/v3-config-engine/AaveV3PayloadOptimism.sol';
import {IAaveV3ConfigEngine} from 'aave-helpers/v3-config-engine/IAaveV3ConfigEngine.sol';
import {IV3RateStrategyFactory} from 'aave-helpers/v3-config-engine/IV3RateStrategyFactory.sol';

/**
 * @title wre
 * @author wre
 * - Snapshot: were
 * - Discussion: erw
 */
contract AaveV3Optimism_Wre_20240125 is AaveV3PayloadOptimism {
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
        optimalUsageRatio: _bpsToRay(4_00),
        baseVariableBorrowRate: _bpsToRay(4_00),
        variableRateSlope1: _bpsToRay(4_00),
        variableRateSlope2: _bpsToRay(4_00),
        stableRateSlope1: _bpsToRay(4_00),
        stableRateSlope2: _bpsToRay(4_00),
        baseStableRateOffset: _bpsToRay(4_00),
        stableRateExcessOffset: _bpsToRay(4_00),
        optimalStableToTotalDebtRatio: _bpsToRay(4_00)
      })
    });

    return rateStrategies;
  }
}
