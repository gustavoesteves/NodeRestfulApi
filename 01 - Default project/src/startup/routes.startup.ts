/**
 * Put here all your middleware routes
 */
import { Application, json, urlencoded } from "express";
import index from "../controllers/index.controller";
import users from "../controllers/user.controller";
import auth from "../controllers/auth.controller";
import { error } from "../middleware/error.middleware";

export function routes(app: Application) {
    app.use(json());
    app.use(urlencoded({ extended: true }));
    app.use('/', index);
    app.use('/api/users', users);
    app.use('/api/auth', auth);
    app.use(error);
}