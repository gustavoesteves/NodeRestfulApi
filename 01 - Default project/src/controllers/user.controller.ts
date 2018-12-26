import { Router } from "express";
import { auth } from "../middleware/auth.middleware";
import service from "../service/user.service";

const router = Router();

router.get('/', auth, (req, res, next) => {
    service.get(req.body._id)
        .then((user) => {
            res.send(user)
        })
        .catch((err) => {
            next(err)
        });
});

router.post('/', async (req, res, next) => {
    service.post(req.body)
        .then((user: any) => res.header('Authentication', user.token).send({
            _id: user._id,
            name: user.name,
            email: user.email
        }))
        .catch((err) => next(err));
});

export default router;