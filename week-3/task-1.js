const os = require('os');

function displayOSInformation() {
  console.log('Current user:', os.userInfo().username);
  console.log('Home directory:', os.homedir());
  console.log('Operating system platform:', os.platform());
}

// Call the function to display OS information
displayOSInformation();
