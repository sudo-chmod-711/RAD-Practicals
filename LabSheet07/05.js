const http = require('http');
const fs = require('fs');
const port = 8005;

const server = http.createServer((req, res) => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            const personData = JSON.parse(data)
            res.end(
                "Name : " + personData.name + "<br>" +
                "Age : " + personData.age
            );    
        }
    });
}).listen(port);
