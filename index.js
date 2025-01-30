const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {

    let pathName = req.url;
    let fileName = () => {
        if(req.url == '/') {
            return './index.html';
        } else if(pathName == '/about') {
            return './about.html';
        }
    }


    fs.readFile(fileName(), 'utf8', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })




}).listen(8080);