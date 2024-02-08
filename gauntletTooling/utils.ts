import {protocolMapping, InputObject} from './transformInput';
import {PoolIdentifier} from '../generator/types';
import {
  arbitrum,
  avalanche,
  mainnet,
  metis,
  optimism,
  polygon,
  base,
  bsc,
  gnosis,
} from 'viem/chains';

export const AVAILABLE_CHAINS = [
  'Ethereum',
  'Optimism',
  'Arbitrum',
  'Polygon',
  'Avalanche',
  'Fantom',
  'Harmony',
  'Metis',
  'Base',
  'BNB',
  'Gnosis',
] as const;

export function getDate() {
  const date = new Date();
  const years = date.getFullYear();
  const months = date.getMonth() + 1; // it's js so months are 0 indexed
  const day = date.getDate();
  return `${years}${months <= 9 ? '0' : ''}${months}${day <= 9 ? '0' : ''}${day}`;
}

export function pascalCase(str: string) {
  return str
    .replace(/[\W]/g, ' ') // remove special chars as this is used for solc contract name
    .replace(/(\w)(\w*)/g, function (g0, g1, g2) {
      return g1.toUpperCase() + g2;
    })
    .replace(/ /g, '');
}

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

export function getDiffFileName(inputObject: InputObject) {
  const diffFileName =
    getPoolNameOrMulti(inputObject) +
    '_' +
    pascalCase(inputObject.global.title) +
    '_' +
    getDate() +
    '_' +
    'before' +
    '_' +
    getPoolNameOrMulti(inputObject) +
    '_' +
    pascalCase(inputObject.global.title) +
    '_' +
    getDate() +
    '_' +
    'after.md';
  return diffFileName;
}

export const CHAIN_TO_CHAIN_ID = {
  Ethereum: mainnet.id,
  Polygon: polygon.id,
  Optimism: optimism.id,
  Arbitrum: arbitrum.id,
  Avalanche: avalanche.id,
  Metis: metis.id,
  Base: base.id,
  BNB: bsc.id,
  Gnosis: gnosis.id,
};

export function getPoolChain(pool: PoolIdentifier) {
  const chain = AVAILABLE_CHAINS.find((chain) => pool.indexOf(chain) !== -1);
  if (!chain) throw new Error('cannot find chain for pool');
  return chain;
}
