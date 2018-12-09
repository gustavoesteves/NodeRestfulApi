/**
 * Documantation reference
 * https://expressjs.com/en/resources/middleware.html
 */
import * as express from "express";
import { anotherMiddleware } from "./ourMiddleware";
const app = express();

/**
 * 
 *  Middleware
 * 
 *  express.json(): to parse the body of requests with a JSON payload
 *  express.urlencoded(): to parse the body of requests with URL-encoded payload
 *  express.static(<name of folder>): to serve static files
 * 
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// we can create our own middleware
app.use(function (req, res, next) {
    console.log('our middleware');
    next();
});

// or we can extract the middleware function to other place
app.use(anotherMiddleware);

const port = process.env.port || 3000;

export function Middleware() {
    app.listen(port, () => console.log('listening....'));    
}
