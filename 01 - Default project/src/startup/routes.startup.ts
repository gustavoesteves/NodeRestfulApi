/**
 * Put here all your middleware routes
 */
import { Application, json, urlencoded } from "express";
import index from "../controllers/index.controller";
import account from "../controllers/account.controller";
import { error } from "../middleware/error.middleware";

export function routes(app: Application) {
    app.use(json());
    app.use(urlencoded({ extended: true }));
    app.use('/', index);
    app.use('/api/account', account);
    app.use(error);
}