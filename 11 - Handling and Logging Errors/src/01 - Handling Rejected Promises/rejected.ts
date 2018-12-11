/**
 * To handle an exception always use try/catch or then/catch
 * when you to be working with Promise
 */
import * as express from "express";
import { UserModel } from "../models/userModel";
const router = express.Router();

// async/await use try/catch
router.get('/', async (req, res, next) => {
    try {
        const users = await UserModel.find();
        res.send(users);
    } catch (err) {
        next(err);
        // res.status(500).send('Something failed');
    }
});

// promise use then/catch
function getUser(): Promise<any> {
    return new Promise((resolve, reject) => {
        UserModel.find((err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
}

router.get('/', async (req, res, next) => {
    getUser()
        .then(result => res.send(result))
        .catch(err => next(err));
});

export default router;