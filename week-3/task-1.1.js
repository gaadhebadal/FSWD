const os = require('os');

function displaySystemMemoryInformation() {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const percentageFreeMemory = ((freeMemory / totalMemory) * 100).toFixed(2);

  console.log('Total system memory:', formatBytes(totalMemory));
  console.log('Free memory:', formatBytes(freeMemory));
  console.log('Percentage of free memory:', percentageFreeMemory + '%');
}

// Helper function to format bytes into KB, MB, or GB
function formatBytes(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + ' ' + sizes[i];
}

// Call the function to display system memory information
displaySystemMemoryInformation();
