// this file is server.js where we will set up a basic Express server 
//Following steps canbe implemented to set up a basic Express server with socket.io integration
//Step1: Import necessary modules
//Step2: Initialize Express app
//Step3: Set up socket.io server
        //Creating a new instance of the socket.io server with CORS settings
        //Connection event listener to handle new client connections
        //Message event listener to handle incoming messages and broadcast them to all connected clients
        //Basic route to test the server
//Step4: Define middleware and routes
//Step5: Start the server

const express = require('express');
const app = express();
const http = require('http');  // <-- Required
const { Server } = require("socket.io");

const server = http.createServer(app);  // Attach Express to HTTP server

// socket.io setup
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Socket.io events
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('message', (data) => {
        io.emit('message', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

// Start server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


const express = require('express');
const app = express();
const {Server} = require("socket.io"); // Importing the server class from socket.io
// socket.io setup
const io = new Server({
    cors: { 
        origin: "*", // Allow all origins for simplicity; adjust as needed for security
        methods: ["GET", "POST"]
    }
});


const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to serve static files from the 'public' directory HTML file and other assets
app.use(express.static('public'));
// when a user tries to connect to the socket
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
//broadcasting messages to all connected clients
    socket.on('message', (data) => {
        io.emit('message', data); // Broadcast the message to all clients
    });
// Basic route to test the server
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});