const { URL } = require('url');

function resolveURL(baseURL, relativePath) {
  // Create a new URL object using the base URL
  const resolvedURL = new URL(relativePath, baseURL);
  // Display the resolved absolute URL
  console.log('Absolute URL:', resolvedURL.href);
}
// Example usage
const baseURL = 'https://www.example.com/hi/';
const relativePath = 'path/to/resolved/';

resolveURL(baseURL, relativePath);
