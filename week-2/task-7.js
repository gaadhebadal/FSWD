const fs = require("fs");
const readline = require("readline");

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

function restoreFileFromBackup() {
  const backupFile = "file1_new.txt";
  const restoredFile = "file1.txt";
  fs.copyFile(backupFile, restoredFile, (err) => {
    if (err) {
      console.error("Error restoring file from backup:", err);
    } else {
      console.log("File restored from backup successfully.");
    }
  });
}
function askFromUser() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Which function would you like to call? (Type 'b'for backup or 'r' for restore): ",
    (answer) => {
      rl.close();
      if (answer === "b") {
        createFileBackup();
      } else if (answer === "r") {
        restoreFileFromBackup();
      } else {
        console.log("Invalid input. Please type 'b' or 'r'.");
      }
    }
  );
}
// Call the function to ask the user
askFromUser();

