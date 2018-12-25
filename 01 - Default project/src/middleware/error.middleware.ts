import * as logger from "winston";
import { NextFunction, Request, Response } from "express";

export function error(err: Error, req: Request, res: Response, next: NextFunction) {
    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).send(err);
    }

    if (err.name === 'ValidationError') {
        // mongoose validation error
        return res.status(400).send(err.message);
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json('Invalid Token');
    }

    // default to 500 server error
    return res.status(500).json(err.message);
}