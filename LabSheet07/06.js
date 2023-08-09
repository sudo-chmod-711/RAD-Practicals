function reverseString(str) {
    return str.split("").reverse().join("")
}

const http = require('http');
const port = 8006;

const inputString = "Rapid Application Development"

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(
        "Original String : " + inputString + "\n" +
        "Reversed String : " + reverseString(inputString)
    );
}).listen(port)