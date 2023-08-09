const http = require('http');
const fs = require('fs');
const csv = require('csv-parser');
const port = 8007;

const server = http.createServer((req, res) => {
    const results = [];
    fs.createReadStream('data.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            const header = Object.keys(results[ 0 ]);
            const table = [];

            table.push(header.join('\t'));

            for (const row of results) {
                const values = header.map(column => row[ column ]);
                table.push(values.join('\t'));
            }

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(table.join('\n'));
        });
}).listen(port);
