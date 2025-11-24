const express = require('express');
const app = express();

// -------- Custom Middleware ----------
app.use((req, res, next) => {
    res.setHeader('x-custom-header', 'test-header');
    next();
});

// Root
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// /api/users
app.get('/api/users', (req, res) => {
    res.status(200).json([
        { id: 1, name: "John" },
        { id: 2, name: "Jane" }
    ]);
});

// for middleware test
app.get('/some-route', (req, res) => {
    res.send('OK');
});

module.exports = app;
