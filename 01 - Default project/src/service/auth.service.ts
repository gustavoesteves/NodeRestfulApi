import { Request } from "express";
import { verify } from "jsonwebtoken";
import { get } from "config";

async function auth(req: Request) {
    let token = req.headers.authorization || req.header('Authentication');
    if (!token) throw 'Access denied. No token provided.';

    return await verify(token.slice(7), get('jwtPrivateKey'));
}

export default { auth };