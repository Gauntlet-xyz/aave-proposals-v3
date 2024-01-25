import * as fs from 'fs';
import {transformInput, InputObject} from './transformInput';

// This function reads the input file and processes it
function processInputFile(filePath: string) {
  fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    try {
      const inputObject: InputObject = JSON.parse(data);
      const transformedObject = transformInput(inputObject);
      console.log(JSON.stringify(transformedObject, null, 2));
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
    }
  });
}

// Retrieve the file path from command line arguments
const filePath = process.argv[2];

if (!filePath) {
  console.error('Please provide a file path as an argument.');
  process.exit(1);
}

processInputFile(filePath);