function add(num1, num2) {
    return num1 + num2
}

const http = require('http');
const port = 8001;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('2 + 3 = ' + add(2,3));
}).listen(port)
