const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

// Routes
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/about', (req, res) => res.sendFile(__dirname + '/about.html'));
app.get('/contact-me', (req, res) => res.sendFile(__dirname + '/contact-me.html'));
// Error Page Route
app.get('*', (req, res) => res.status(404).sendFile(__dirname + '/404.html'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Listening to port ' + PORT);
})

// http.createServer((req, res) => {

//     let constructedPath = () => {
//         if(req.url == '/index' || req.url == '/') {
//             return './index.html';
//         } else if(req.url == '/about') {
//             return './about.html';
//         } else if(req.url == '/contact-me') {
//             return './contact-me.html';
//         } else {
//             return './404.html';
//         }
//     }


//     fs.readFile(constructedPath(), (err, data) => {
//         res.writeHead(200, {'Content-Type': 'text/html'});
        
//         return res.end(data);
//     })



// }).listen(8080);