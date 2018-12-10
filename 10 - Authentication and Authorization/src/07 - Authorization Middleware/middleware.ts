import * as config from "config";
import * as jwt from "jsonwebtoken";

export function Auth(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied...');

    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('Invalid token...');
    }
}