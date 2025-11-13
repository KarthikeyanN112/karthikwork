// Import the built-in http module
const http = require('http');

// Define the port number
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  const url = req.url;

  // Set header to return plain text or HTML
  res.setHeader('Content-Type', 'text/html');

  if (url === '/') {
    res.statusCode = 200;
    res.end('<h1>Welcome to Node.js Server!</h1><p>This is the Home Page.</p>');
  } 
  else if (url === '/about') {
    res.statusCode = 200;
    res.end('<h1>About Us</h1><p>This is a minimal Node.js web server example.</p>');
  } 
  else if (url === '/contact') {
    res.statusCode = 200;
    res.end('<h1>Contact</h1><p>Email: contact@company.com<br>Phone: +91-9876543210</p>');
  } 
  else {
    res.statusCode = 404;
    res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
