import { Request, Response } from "express";
import service from "../service/auth.service";

export function auth(req: Request, res: Response, next: Function) {
    service.auth(req)
        .then(token => {
            req.body.token = token;
            next();
        })
        .catch(err => next(err));
}