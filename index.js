const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {

    let constructedPath = () => {
        if(req.url == '/index' || req.url == '/') {
            return './index.html';
        } else if(req.url == '/about') {
            return './about.html';
        } else if(req.url == '/contact-me') {
            return './contact-me.html';
        } else {
            return './404.html';
        }
    }


    fs.readFile(constructedPath(), (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        
        return res.end(data);
    })



}).listen(8080);