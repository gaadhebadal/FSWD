const querystring = require('querystring');
// Example URL with query string
const url = 'https://www.myntra.com/men-formal-shirts?f=Brand%3AVan%20Heusen';
// Extract key-value pairs from query string
const query = url.split('?')[1];
const parsedQuery = querystring.parse(query);
// Display extracted key-value pairs
console.log('Extracted Key-Value Pairs:');
for (const key in parsedQuery) {
  console.log(`${key}: ${parsedQuery[key]}`);
}
