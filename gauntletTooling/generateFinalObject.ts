import * as fs from 'fs';
import {getDiffFileName} from './utils';

// Define types for Markdown section
interface MarkdownSection {
  title: string;
  content: string;
}

// Helper function to extract JSON from markdown content
function extractJSONFromMarkdown(markdown: string): any {
  const jsonRegex: RegExp = /```json\n([\s\S]*?)\n```/;
  const match: RegExpMatchArray | null = markdown.match(jsonRegex);
  return match ? JSON.parse(match[1]) : null;
}

// Helper function to extract sections starting with '####'
function extractMarkdownSections(markdown: string): MarkdownSection[] {
  const sectionRegex: RegExp = /#### (.*?)\n([\s\S]*?)(?=\n#### |\n## |$)/g;
  let match: RegExpExecArray | null;
  const sections: MarkdownSection[] = [];

  while ((match = sectionRegex.exec(markdown)) !== null) {
    sections.push({title: match[1], content: match[2].trim()});
  }

  return sections;
}

// Main function that processes the Markdown file
function processMarkdownFile(markdownFilePath: string): void {
  // Read markdown file
  const markdownContent: string = fs.readFileSync(markdownFilePath, 'utf8');

  // Extract JSON content
  const jsonContent: any = extractJSONFromMarkdown(markdownContent);
  if (!jsonContent) {
    console.error('Could not extract JSON from markdown file');
    process.exit(1);
  }

  // Extract markdown sections
  const markdownSections: MarkdownSection[] = extractMarkdownSections(markdownContent);

  // Create final object
  const proposalObject: object = {
    parameterSnapshot: jsonContent,
    parameterSnapshotMD: markdownSections,
    testReport: {
      tests: [],
      counts: {
        fail: 0,
        pass: 0,
        total: 0,
      },
    },
  };

  // Write to output file
  fs.writeFileSync('./proposal.json', JSON.stringify(proposalObject, null, 2));

  console.log('proposal.json has been created successfully.');
}

// Process the files in the directory
const originalInput = JSON.parse(process.argv[2]); // CLI argument for original content
const jsonObject = originalInput.parameters; // CLI argument for JSON object
const directoryPath = './diffs/' + getDiffFileName(jsonObject);
console.log(`Processing files in directory: ${directoryPath}`);

// Process the Markdown file
processMarkdownFile(directoryPath);
