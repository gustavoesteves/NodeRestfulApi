/**
 * To set the debug in our enviroment (on windows):
 * set DEBUG=MyApp (or whatever you call it)
 * 
 * to set more then one
 * set DEBUG=MyApp, Mydb or set DEBUG=*
 */
import * as express from "express";
import * as morgan from "morgan";
import * as debug from "debug";

const app = express();

// to create a new debug app
const appDebug = debug('MyApp');

// for another example we can create a debugger to our database
const dbDebug = debug('Mydb');

app.use(express.urlencoded({ extended: true }));

if (app.get('env')) {
    app.use(morgan('dev'));
    appDebug('debugging...');
}

dbDebug('Database is running...');

const port = process.env.port || 3000;

export function Debugger() {
    app.listen(port, () => console.log('listening...'));
}