const fs = require("fs");
const path = require("path");

const langToExtension = {
  php: "php", node: "js", java: "java", ruby: "rb", csharp: "cs", python: "py", go: "go", html: "html", bash: "sh", json: "json", yaml: "yml",
};

const commentStyles = [
  { start: "// snippet-start:", end: "// snippet-end:" }, // JS, Java, PHP, C#, Go
  { start: "# snippet-start:", end: "# snippet-end:" },   // Python, Bash, Ruby
  { start: "<!-- snippet-start:", end: "<!-- snippet-end:" }, // HTML
];

function findSnippet(content, blockName) {
  for (const style of commentStyles) {
    const startMarker = `${style.start} ${blockName}`;
    const endMarker = `${style.end} ${blockName}`;
    const startIndex = content.indexOf(startMarker);
    const endIndex = content.indexOf(endMarker);

    if (startIndex !== -1 && endIndex !== -1) {
      return content.slice(startIndex + startMarker.length, endIndex).trim();
    }
  }
  return null;
}

function loadSnippet(filePath, blockName = null, lang = null) {
  try {
    if (fs.lstatSync(filePath).isDirectory()) {
      if (!lang || !langToExtension[lang]) {
        throw new Error(`Language "${lang}" is not recognized or missing a file extension mapping.`);
      }
      const extension = langToExtension[lang];
      filePath = path.join(filePath, `index.${extension}`);
    }

    const content = fs.readFileSync(filePath, "utf-8");

    if (blockName) {
      const snippetContent = findSnippet(content, blockName);
      if (snippetContent) {
        return snippetContent;
      }
      console.warn(`Warning: Block "${blockName}" not found. Falling back to full content.`);
    }

    return content;
  } catch (error) {
    return `// Error loading snippet: ${error.message}`;
  }
}

function parseSnippetDeclaration(declaration) {
  const snippetRegex = /-\s*snippet:\s*(.+?)\s*(?:-\s*partial:\s*(.+?)\s*)?-\s*lang:\s*\[([^\]]+)\]/s;
  const match = declaration.match(snippetRegex);

  if (!match) {
    throw new Error("Invalid snippet declaration format.");
  }

  const [, snippet, partial, langs] = match;
  const languages = langs.split(",").map(lang => lang.trim());
  return { snippet, partial, languages };
}

function injectSnippets(inputFile, outputFile) {
  const markdownContent = fs.readFileSync(inputFile, "utf-8");

  const declarationRegex = /---\ncode_snippet:([\s\S]*?)---/g;

  const processedContent = markdownContent.replace(declarationRegex, (blockMatch, declaration) => {
    const { snippet, partial, languages } = parseSnippetDeclaration(declaration);

    const snippets = languages.map(lang => {
      const snippetPath = path.resolve(`../../dx-devsite-snippets/snippets/${lang}/${snippet}`);
      const snippetContent = loadSnippet(snippetPath, partial || null, lang);
      return `\`\`\`${lang}\n${snippetContent}\n\`\`\``;
    });

    return `[[[\n${snippets.join("\n")}\n]]]`;
  });

  fs.writeFileSync(outputFile, processedContent, "utf-8");
  console.log(`File processed and saved to: ${outputFile}`);
}

const inputFile = "./.test.md";
const outputFile = "./.test-process.md";

injectSnippets(inputFile, outputFile);
