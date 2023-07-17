const fs = require("fs");

// Function to create a file backup
function createFileBackup() {
  const sourceFile = "file1.txt";
  const backupFile = "file1_new.txt";
  fs.copyFile(sourceFile, backupFile, (err) => {
    if (err) {
      console.error("Error creating file backup:", err);
    } else {
      console.log("File backup created successfully.");
    }
  });
}
// Function to restore the file from backup
function restoreFileFromBackup() {
  const backupFile = "file1_new.txt";
  const restoredFile = "file1.txt"; // Corrected filename here
  fs.copyFile(backupFile, restoredFile, (err) => {
    if (err) {
      console.error("Error restoring file from backup:", err);
    } else {
      console.log("File restored from backup successfully.");
    }
  });
}
// Usage
createFileBackup();

// Simulating some changes to the original file (file1.txt)
fs.writeFile("file1.txt", "Modified content", (err) => {
  if (err) {
    console.error("Error modifying the original file:", err);
  } else {
    console.log("Original file modified.");
    restoreFileFromBackup();
  }
});
