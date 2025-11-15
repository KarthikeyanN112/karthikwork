// Step1: creating a ref
// Step2: Defining app.get()
// Step3: Defining app.listen()
// Step4: Executing the file



const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Express.js!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});