const numbers = [12, 45, 6, 78, 23, 56, 89, 34, 67, 99];
const maxNum = Math.max(...numbers);

const http = require('http');
const port = 8003;

const server = http.createServer((req, res) => {
    const maxNumber = Math.max(...numbers);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`${maxNum}`);
}).listen(port)
