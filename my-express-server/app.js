// Import the http module
const http = require('http');
const url = require('url');

// Create the HTTP server
const server = http.createServer((req, res) => {
  const method = req.method; // Get the HTTP request method
  
  // Handle GET request
  if (method === 'GET') {
    // Parse the URL and extract query parameters
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;  // { num1: 'value', num2: 'value' }

    // Extract num1 and num2 from the query parameters
    const num1 = parseFloat(query.num1);  // Convert the num1 parameter to a float
    const num2 = parseFloat(query.num2);  // Convert the num2 parameter to a float

    // Check if the parameters are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
      const sum = num1 + num2;  // Calculate the sum of the numbers
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`<h1>The sum of ${num1} and ${num2} is ${sum}</h1>`);
    } else {
      res.writeHead(400, { 'Content-Type': 'text/html' });
      res.end('<h1>Error: Please provide valid numbers for num1 and num2.</h1>');
    }
  }
  
  // Handle other HTTP methods (in case something other than GET is used)
  else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

// Make the server listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});
