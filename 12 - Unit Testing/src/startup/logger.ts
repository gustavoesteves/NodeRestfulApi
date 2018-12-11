/**
 * Documentation reference
 * https://www.npmjs.com/package/winston
 */
import { createLogger, format, transports } from "winston";
import * as path from "path";

export function logger() {
    createLogger({
        level: 'info',
        format: format.combine(
            format.colorize(),
            format.json()
        ),
        transports: [
            new transports.File({ filename: path.join('log', 'error.log'), level: 'error' }),
            new transports.File({ filename: path.join('log', 'combined.log') }),
            new transports.Console()
        ],
        exceptionHandlers: [
            new transports.File({ filename: 'log/exceptions.log' }),
            new transports.Console()
        ]
    });
}