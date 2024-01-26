import * as fs from 'fs';
import {transformInput, InputObject} from './transformInput';

async function processInputFile(filePath: string) {
  fs.readFile(filePath, {encoding: 'utf-8'}, async (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    try {
      const inputObject: InputObject = JSON.parse(data);
      const transformedObject = await transformInput(inputObject);

      const outputString = `import { ConfigFile } from '../../generator/types';\nexport const config: ConfigFile = ${JSON.stringify(
        transformedObject,
        null,
        2
      )};`;
      fs.writeFile('./gauntlet-tooling/config.ts', outputString, (writeErr) => {
        if (writeErr) {
          console.error('Error writing to file:', writeErr);
        } else {
          console.log('Successfully written to config.ts');
        }
      });
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
    }
  });
}

const filePath = process.argv[2];
if (!filePath) {
  console.error('Please provide a file path as an argument.');
  process.exit(1);
}

processInputFile(filePath);
