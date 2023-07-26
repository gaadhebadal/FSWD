const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function extractDirectoryAndBaseName(filePath) {
  // Get the directory name using path.dirname
  const directoryName = path.dirname(filePath);

  // Get the base name using path.basename
  const baseName = path.basename(filePath);

  console.log(`Directory Name: ${directoryName}`);
  console.log(`Base Name: ${baseName}`);
}

// Example usage
rl.question("Enter the file path: ", (filePath) => {
  extractDirectoryAndBaseName(filePath);
  rl.close();
});
