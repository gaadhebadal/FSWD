const readline = require('readline');
// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Prompt user for URL input
rl.question('Enter a URL: ', (userInput) => {
  // Parse the URL
  const url = new URL(userInput);
  // Display the components
  console.log('Protocol:', url.protocol);
  console.log('Host:', url.host);
  console.log('Path:', url.pathname);
  console.log('Query Parameters:');
  // Iterate over query parameters
  url.searchParams.forEach((value, param) => {
    console.log(`\t${param}: ${value}`);
  });
  // Close the readline interface
  rl.close();
});
