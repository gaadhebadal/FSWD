const path = require('path');
const fs = require('fs');

function Equal(relativePath, absolutePath) {
  const normalizedRelativePath = path.normalize(relativePath);
  const normalizedAbsolutePath = path.normalize(absolutePath);
  const resolvedRelativePath = path.resolve(normalizedRelativePath);
  return resolvedRelativePath === normalizedAbsolutePath;
}
const relativePath = '../week-2/file1.txt';
const absolutePath = 'C:/Users/Administrator/Desktop/FSWD_193/week-2/file1.txt';
const result = Equal(relativePath, absolutePath);
console.log(`Paths refer to the same file: ${result}`);