import * as express from "express";

const app = express();

const port = process.env.PORT || 3000;

export function portWeServer() {
    app.get('/', (req, res) => {
        res.send('hello world! de novo');
    });

    app.listen(port, () => console.log(`listening on port ${port}...`));
}