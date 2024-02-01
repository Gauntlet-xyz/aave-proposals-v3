import * as fs from 'fs';
import * as path from 'path';
import {getPoolNameOrMulti, getDiffFileName} from './utils';
import {getDate, pascalCase} from '../generator/common';
import {InputObject} from './transformInput';

// Function to process all files in a given directory
function processFilesInDirectory(directoryPath: string, jsonObject: InputObject): void {
  if (!fs.existsSync(directoryPath)) {
    console.error(`Directory at ${directoryPath} does not exist.`);
    process.exit(1);
  }

  let files: string[] = fs.readdirSync(directoryPath);
  const diffFileName = getDiffFileName(jsonObject);
  files.push('./diffs/' + diffFileName);
  const fileObject: Record<string, string> = {};

  files.forEach((file) => {
    const filePath: string = path.join(directoryPath, file);
    try {
      const fileContent: string = fs.readFileSync(filePath, 'utf8');
      fileObject[filePath] = fileContent;
    } catch (error) {
      console.error(`Error reading file at ${filePath}: ${(error as Error).message}`);
    }
  });

  fs.writeFileSync('./file-object.json', JSON.stringify(fileObject, null, 2));
  console.log('file-object.json has been created successfully with contents of the directory.');
}

// Process the files in the directory
const originalInput = JSON.parse(process.argv[2]); // CLI argument for original content
const jsonObject = originalInput.parameters; // CLI argument for JSON object
const directoryPath =
  './src/' +
  getDate() +
  '_' +
  getPoolNameOrMulti(jsonObject) +
  '_' +
  pascalCase(jsonObject.global.title);
console.log(`Processing files in directory: ${directoryPath}`);
processFilesInDirectory(directoryPath, jsonObject);
