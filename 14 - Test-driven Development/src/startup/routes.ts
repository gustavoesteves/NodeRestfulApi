/**
 * Put here all your middleware routes
 */
import * as express from "express";
import index from "../middleware/index";
import { error } from "../middleware/error";

export function routes(app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/', index);
    app.use(error);
}