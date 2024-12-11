const fs = require("fs");
const path = require("path");

const commentStyles = {
  php: { start: "// snippet-start:", end: "// snippet-end:" },
  javascript: { start: "// snippet-start:", end: "// snippet-end:" },
  typescript: { start: "// snippet-start:", end: "// snippet-end:" },
  java: { start: "// snippet-start:", end: "// snippet-end:" },
  ruby: { start: "# snippet-start:", end: "# snippet-end:" },
  c: { start: "// snippet-start:", end: "// snippet-end:" },
  python: { start: "# snippet-start:", end: "# snippet-end:" },
  go: { start: "// snippet-start:", end: "// snippet-end:" },
  html: { start: "<!-- snippet-start:", end: "<!-- snippet-end:" },
  xml: { start: "<!-- snippet-start:", end: "<!-- snippet-end:" },
  bash: { start: "# snippet-start:", end: "# snippet-end:" },
};

function loadSnippet(filePath, blockName = null, language = "javascript") {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    if (!blockName) {
      return content;
    }

    const { start, end } = commentStyles[language] || commentStyles.javascript;

    const startMarker = `${start} ${blockName}`;
    const endMarker = `${end} ${blockName}`;
    const startIndex = content.indexOf(startMarker);
    const endIndex = content.indexOf(endMarker);

    if (startIndex === -1 || endIndex === -1) {
      throw new Error(`Block "${blockName}" not found at file ${filePath}`);
    }

    return content.slice(startIndex + startMarker.length, endIndex).trim();
  } catch (error) {
    return `// Error loading snippet: ${error.message}`;
  }
}

function injectSnippets(inputFile, outputFile) {
  const markdownContent = fs.readFileSync(inputFile, "utf-8");

  const snippetBlockRegex = /\[\[(.*?)\]\]/gs;
  const snippetRegex = /```(\w+)\n\((.+?)(#.+?)?\)\n```/g;

  const processedContent = markdownContent.replace(snippetBlockRegex, (blockMatch, blockContent) => {
    const snippets = [];
    let match;

    while ((match = snippetRegex.exec(blockContent)) !== null) {
      const [_, lang, snippetPath, block] = match;
      const blockName = block ? block.slice(1) : null;
      const snippetContent = loadSnippet(path.resolve(snippetPath), blockName, lang);
      snippets.push(`\`\`\`${lang}\n${snippetContent}\n\`\`\``);
    }

    return `[[[\n${snippets.join("\n")}\n]]]`;
  });

  fs.writeFileSync(outputFile, processedContent, "utf-8");
  console.log(`Processed file saved in: ${outputFile}`);
}

const inputFile = "./.test.md";
const outputFile = "./.processed-test.md";

injectSnippets(inputFile, outputFile);
