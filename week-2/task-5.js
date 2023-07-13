const fs = require("fs");
const readline = require("readline");
// Create an interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for employee information
rl.question("Enter employee name: ", (name) => {
  rl.question("Enter employee age: ", (age) => {
    rl.question("Enter employee department: ", (department) => {
      rl.question("Enter employee address: ", (address) => {
        // Create an object with the employee information
        const employee = {
          name,
          age: parseInt(age),
          department,
          address
        };
        // Convert the object to JSON format
        const jsonData = JSON.stringify(employee); 
        // Write the JSON data to the file
        fs.writeFile("employee-data.json", jsonData, (err) => {
          if (err) {
            console.error("Error writing to file:", err);
          } else {
            console.log("Employee data has been written to employee-data.json");
          }
          // Close the readline interface
          rl.close();
        });
      });
    });
  });
});
