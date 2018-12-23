/**
 * Documentation reference
 * https://www.npmjs.com/package/winston
 */
import { createLogger, format, transports } from "winston";

process.on('unhandledRejection', (reason) => {
    throw new Error(reason);
});

export function logger() {
    createLogger({
        level: 'info',
        format: format.combine(
            format.colorize(),
            format.json()
        ),
        transports: [
            // new transports.File({ filename: 'log/error.log', level: 'error' }),
            // new transports.File({ filename: 'log/combined.log' }),
            new transports.Console()
        ],
        exceptionHandlers: [
            // new transports.File({ filename: 'log/exceptions.log' }),
            new transports.Console()
        ]
    });
}