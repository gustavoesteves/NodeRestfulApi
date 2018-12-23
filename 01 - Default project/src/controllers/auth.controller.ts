import { Router } from "express";
import service from "../service/auth.service";

const router = Router();

router.post('/', async (req, res, next) => {
    service.post(req.body)
        .then((token) => res.send(token))
        .catch((err) => next(err));
});

export default router;