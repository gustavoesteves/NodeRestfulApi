// Documantation reference
// https://nodejs.org/dist/latest-v10.x/docs/api/http.html

import * as http from "http";

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello world');
    } else if (req.url === '/user') {
        res.write('user page');
    }
});

server.listen(3000);

console.log('Listening on port 3000...');
