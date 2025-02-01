// Import the HTTP module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code (200 = OK)
  res.setHeader('Content-Type', 'text/plain'); // Set response header
  res.end('Hello, World!\n'); // Send response
});

// Define the port to listen on
const port = 3000;
const host = '0.0.0.0';

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
