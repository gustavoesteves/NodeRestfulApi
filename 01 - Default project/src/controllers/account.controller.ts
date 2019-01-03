import { Router } from "express";
import { auth } from "../middleware/auth.middleware";
import service from "../service/account.service";

const router = Router();

router.get('/UserInfo', auth, (req, res, next) => {
    service.userinfo(req.body._id)
        .then(user => res.json(user))
        .catch(err => next(err));
});

router.post('/Logout', (req, res) => {
    res.header('Authentication', '').json({});
});

router.get('/ManageLogins', auth, (req, res) => { });

router.post('/ChangePassword', auth, (req, res, next) => {
    service.changePassword(req)
        .then(user => res.json(user))
        .catch(err => next(err));
});

router.get('/Login', (req, res, next) => {
    service.validate(req.body)
        .then(user => res.header('Authentication', user.token).json(user))
        .catch(err => next(err));
});

router.post('/Register', (req, res, next) => {
    service.register(req.body)
        .then(user => res.header('Authentication', user.token).json(user))
        .catch(err => next(err));
});

export default router;