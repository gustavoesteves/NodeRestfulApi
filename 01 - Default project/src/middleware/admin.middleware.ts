import { NextFunction, Request, Response } from "express";

export function admin(req: Request, res: Response, next: NextFunction) {
    // 401 Unauthorized
    // 403 Forbidden 

    if (!req.user.isAdmin) return res.status(403).send('Access denied.');

    next();
}