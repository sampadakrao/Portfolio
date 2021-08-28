//after 'npm init', run command 'npm i express.js nodemon nodemailer dotenv' to install libraries
//express.js - is to create a server
//nodemon - is to run server continuously
//nodemailer - is to send mails
//dotenv - is for making environment variable. Using this to store email id and password outside of server.

//1) import libraries
const express = require('express');
const path = require('path');

//2) store public folder path to a variable name's initial path
let initialPath = path.join(__dirname, "public");
//3) make a server by calling the express function
let app = express();

//4) use app.use method to set public folder path as a static path (app.use is used to setup middlewares)
app.use(express.static(initialPath));

//5) Add home route here. In response, send index.html file.
app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"));
})

//6) Lastly make server listen on 3000th port
app.listen(3000, () => {
    console.log('listening.....');
})