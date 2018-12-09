import * as express from "express";

const app = express();

export function WebServer() {
    app.get('/', (req, res) => {
        res.send('hello world! new world!');
    });

    app.get('/user', (req, res) => {
        res.send('hello user...');
    });

    app.listen(3000, () => console.log('listening on port 3000...'));
}