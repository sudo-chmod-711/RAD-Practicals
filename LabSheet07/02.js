const arr = [2, 3, 4, 5, 9]

const http = require('http');
const port = 8002;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const squares = arr.map((num) => num * num);
    res.end(squares.join(' '));
}).listen(port)
