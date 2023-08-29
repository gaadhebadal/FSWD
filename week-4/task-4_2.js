const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkFilePathExists(filePath) {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error("Error: File does not exist.");
    } else {
      console.log("Success: File exists.");
    }
  });
}

// Example usage
rl.question("Enter the file path: ", (filePath) => {
  checkFilePathExists(filePath);
  rl.close();
});

