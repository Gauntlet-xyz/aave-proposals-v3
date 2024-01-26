import fs from 'fs';
import path from 'path';

// Function to extract content based on header, including tables
function extractContent(text: string, header: string): string {
  // Adjusted to handle tables and regular text
  const regex = new RegExp(
    `(?<=## ${header}\\n\\n)([\\s\\S]*?)(?=\\n\\n##|\\*\\*Disclaimer:|\\*By approving this proposal\\*)`,
    'gm'
  );
  const matches = regex.exec(text);
  return matches ? matches[0].trim() : '';
}

// Function to extract content from disclaimer
function extractDisclaimer(text: string): string {
  const regex = /(?<=\*\*Disclaimer: )(.*?)(?=\*\*)/gm;
  const matches = regex.exec(text);
  return matches ? matches[0].trim() : '';
}

// Main function to generate the document
export function generateDocument(
  originalFilePath: string,
  existingFilePath: string,
  outputFilePath: string
): void {
  const originalText = fs.readFileSync(originalFilePath, 'utf8');

  // Extract the contents from the original document
  const summary = extractContent(originalText, 'Summary');
  const motivation = extractContent(originalText, 'Motivation');
  const specification = extractContent(originalText, 'Specification');
  const disclaimer = extractDisclaimer(originalText);
  const tosContent: string = `_By approving this proposal, you agree that any services provided by Gauntlet shall be governed by the terms of service available at gauntlet.network/tos._`;

  // Read the existing document to get metadata and references
  const existingText = fs.readFileSync(existingFilePath, 'utf8');

  // Extract metadata and references
  const metadataRegex = /(^---[\s\S]*?---)/gm;
  const referencesRegex = /(?<=## References\n\n)((?:- .*)(?:\n(?!\n##))?)+/gm;

  const metadata = metadataRegex.exec(existingText)?.[0] ?? '';
  const references = referencesRegex.exec(existingText)?.[0] ?? '';

  // Prepare the new document content
  const newDocumentContent = `${metadata}

## Simple Summary
\n${summary}

## Motivation
\n${motivation}

## Specification
\n${specification}

## References
\n${references}

## Disclaimer
\n${disclaimer}

## Copyright
\n${tosContent}

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
`;

  // Write the new document to a file
  fs.writeFileSync(outputFilePath, newDocumentContent, 'utf8');

  console.log('Document created successfully!');
}

// Example usage:
const originalFilePath = './gauntletTooling/testFiles/originalHackMD.md';
const targetFilePath = './gauntletTooling/testFiles/targetHackMD.md';
generateDocument(originalFilePath, targetFilePath, targetFilePath);
