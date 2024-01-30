import fs from 'fs';
import {exec} from 'child_process';
import {getPoolName} from './utils';
import {getDate, pascalCase} from '../generator/common';

const originalInput = JSON.parse(process.argv[2]);
const jsonObject = originalInput.parameters;
const pools = getPoolName(jsonObject);

for (const pool of pools) {
  const file = `${pool}_${pascalCase(jsonObject.global.title)}_${getDate()}`;
  const command = `make test-contract filter=${file} > output-logs.txt`;

  exec(command, (error) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });
}
