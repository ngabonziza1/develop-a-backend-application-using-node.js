// Import the built-in http module
const http = require('http');
const url = require('url');  // For parsing the URL
const querystring = require('querystring');  // For parsing POST data

// Create the HTTP server
const server = http.createServer((req, res) => {
  const method = req.method; // Get the HTTP request method (GET, POST, etc.)
  
  // Handle GET request
  if (method === 'GET') {
    const parsedUrl = url.parse(req.url, true); // Parse the URL and get query parameters
    const name = parsedUrl.query.name || 'Guest';  // Get the query parameter "name" from the URL
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1>Hello, ${name}!</h1>`);
  }
  
  // Handle POST request
  else if (method === 'POST') {
    let body = '';  // To store the incoming data from the client

    req.on('data', chunk => {
      body += chunk;  // Append each chunk of data
    });

    req.on('end', () => {
      // Parse the POST data
      const parsedBody = querystring.parse(body);
      const name = parsedBody.name || 'Guest';  // Extract the "name" from the body

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`<h1>Received POST: Hello, ${name}!</h1>`);
    });
  }
  
  // Handle any other requests
  else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

// Make the server listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});
