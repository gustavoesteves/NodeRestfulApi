/**
 * Documentation reference
 * https://www.npmjs.com/package/winston
 */
import * as winston from "winston";

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'log/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'log/combined.log' }),
        new winston.transports.Console()
    ]
});