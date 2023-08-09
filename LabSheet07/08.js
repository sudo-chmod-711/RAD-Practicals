const axios = require('axios');
const http = require('http');
const port = 8008;

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

const server = http.createServer((req, res) => {
  axios.get(apiUrl)
    .then(response => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end("API Response : " + response.data);
    })
    .catch(error => {
      console.error("Error fetching data : " + error);
    });
}).listen(port)



