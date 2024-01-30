import * as fs from 'fs';
import {transformInput, InputObject} from './transformInput';

async function processInputData(inputData: string) {
  try {
    console.log('inputData:', inputData);
    console.log('inputData[parameters]:', JSON.parse(inputData)['parameters']);
    const inputObject: InputObject = JSON.parse(inputData['parameters']);
    const transformedObject = await transformInput(inputObject);

    const outputString = `import { ConfigFile } from '../../generator/types';\nexport const config: ConfigFile = ${JSON.stringify(
      transformedObject,
      null,
      2
    )};`;
    fs.writeFile('./gauntletTooling/config.ts', outputString, (writeErr) => {
      if (writeErr) {
        console.error('Error writing to file:', writeErr);
      } else {
        console.log('Successfully written to config.ts');
      }
    });
  } catch (parseErr) {
    console.error('Error processing input:', parseErr);
  }
}

function processInputFile(filePath: string) {
  fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    processInputData(data);
  });
}

const input = process.argv[2];
if (!input) {
  console.error('Please provide a file path or JSON string as an argument.');
  process.exit(1);
}

// Check if the input is a file path or a JSON string
if (fs.existsSync(input)) {
  processInputFile(input);
} else {
  processInputData(input);
}
