import {readFileSync} from 'fs';
import {ConfigFile} from '../generator/types';

const existingFilePath = './gauntletTooling/config.ts';

export function extractAndConcatenate(): string {
  try {
    // Read the file synchronously
    const fileContent = readFileSync(existingFilePath, 'utf8');

    // Since the file is a TypeScript file, you need to execute it safely
    // Here we're assuming the file contains a string of the ConfigFile type for simplicity
    // In practice, executing or evaluating code from a file can be risky and should be done with caution
    const {config} = eval(fileContent) as {config: ConfigFile};

    // Extracting the required fields
    const {pools, date, shortName} = config.rootOptions;

    // Determine the pool value
    const poolValue = pools.length === 1 ? pools[0] : 'MULTI';

    // Concatenate the string
    const result = `${date}_${poolValue}_${shortName}`;
    return result;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

export function extractShortName(): string {
  try {
    // Read the file synchronously
    const fileContent = readFileSync(existingFilePath, 'utf8');

    // Since the file is a TypeScript file, you need to execute it safely
    // Here we're assuming the file contains a string of the ConfigFile type for simplicity
    // In practice, executing or evaluating code from a file can be risky and should be done with caution
    const {config} = eval(fileContent) as {config: ConfigFile};

    // Extracting the shortName
    const {shortName} = config.rootOptions;

    return shortName;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

try {
  const result = extractAndConcatenate();
  console.log(result);
} catch (error) {
  console.error(error);
}
