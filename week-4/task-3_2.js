const path = require('path');

function extractFileExtension(filePath) {
  // Get the file extension using path.extname
  const fileExtension = path.extname(filePath);

  // Check if the file extension exists
  if (fileExtension) {
    // Remove the leading dot from the extension
    const extension = fileExtension.slice(1);
    console.log(`The file extension is: ${extension}`);
  } else {
    console.log('The file has no extension.');
  }
}
const filePath = '/Users/gaadhebadal/programming /sem-5/FSWD/FSWD/week-2/employee-data.json';
extractFileExtension(filePath);
