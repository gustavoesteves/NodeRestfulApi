import { Router } from "express";
import { auth } from "../middleware/auth.middleware";
import service from "../service/account.service";

const router = Router();

router.get('/UserInfo', auth, (req, res, next) => { 
    service.get(req.body._id)
        .then((user) => res.send(user))
        .catch((err) => next(err));
});

router.post('/Logout', auth, (req, res) => {
    res.header('Authentication', '').send({});
});

router.get('/ManageLogins', auth, (req, res) => { });

router.post('/ChangePassword', auth, (req, res) => { });

router.get('/Login', (req, res) => { });

router.post('/Register', (req, res, next) => {
    service.register(req.body)
        .then((user: any) => res.header('Authentication', user.token).send({
            _id: user._id,
            name: user.name,
            email: user.email
        }))
        .catch((err) => next(err));
});

export default router;