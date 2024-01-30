import {protocolMapping, InputObject} from './transformInput';

function createRootOptionsPools(inputObject: InputObject): string[] {
  const pools: string[] = [];
  for (const protocol in inputObject) {
    if (protocol === 'global') continue; // Skip the 'global' key

    const outputProtocol = protocolMapping[protocol] || protocol;
    pools.push(outputProtocol);
  }
  return pools;
}

export function getPoolNameOrMulti(inputObject: InputObject): string {
  const pools = createRootOptionsPools(inputObject);
  return pools.length === 1 ? pools[0] : 'MULTI';
}

export function getPoolName(inputObject: InputObject): string[] {
  const pools = createRootOptionsPools(inputObject);
  return pools;
}
