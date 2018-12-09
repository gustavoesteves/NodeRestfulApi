/**
 * To set the variable NODE_ENV (on windows), go to the prompt:
 * set NODE_ENV=development (or production, or whatever you want)
 * and we catch that NODE_ENV variable on Node like:
 * app.get('env')
 */

import * as express from "express";
import * as morgan from "morgan";
const app = express();

app.use(express.urlencoded({ extended: true }));

// we're going to use a "morgan" to log our calls to the console
if (app.get('env')) {
    app.use(morgan('dev'));
}

const port = process.env.port || 3000;

export function Enviroments() {
    app.listen(port, () => console.log('listening...'));
}