import * as express from "express";
import { UserModel } from "./userModel";
const router = express.Router();

/**
 * to remove all our try/catch code to one place
 * we create a factory function to handle that
 */
function defaultTryCatch(handler) {
    return async (req, res, next) => {
        try {
            await handler(req, res);
        } catch (err) {
            next(err);
        }
    }
}

// async/await use try/catch
router.get('/', defaultTryCatch(async (req, res, next) => {
    try {
        const users = await UserModel.find();
        res.send(users);
    } catch (err) {
        next(err);
    }
}));