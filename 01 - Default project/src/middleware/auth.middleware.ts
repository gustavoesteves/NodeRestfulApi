import { Request, Response } from "express";
import service from "../service/auth.service";

export function auth(req: Request, res: Response, next: Function) {
    service.auth(req)
        .then(() => next())
        .catch(() => next('Invalid token...' + req.header('Authentication')));
}