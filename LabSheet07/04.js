function fact(n) {
  if (n == 0 || n == 1)
    return 1;
  else
    return n * fact(n - 1);
}

const http = require('http');
const port = 8004;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const num = 5;
  res.end(num + '! = ' + fact(5));
}).listen(port)
