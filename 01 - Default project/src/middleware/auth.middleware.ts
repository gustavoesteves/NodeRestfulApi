import { NextFunction, Request, Response } from "express";
import service from "../service/auth.service";

export function auth(req: Request, res: Response, next: NextFunction) {
    service.auth(req)
        .then((user) => next(user))
        .catch((err) => next('Invalid token'));
}