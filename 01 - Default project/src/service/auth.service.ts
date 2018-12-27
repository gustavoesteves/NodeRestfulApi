import { Request } from "express";
import { compare } from "bcrypt";
import { verify } from "jsonwebtoken";
import { get } from "config";
import { IUser } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model";

async function post(user: IUser) {
    //validate
    const _user = await UserModel.findOne({ email: user.email });
    if (!_user)
        throw 'Invalid email or password.';
    if (!await compare(user.password, _user.password))
        throw 'Invalid email or password.';

    return await _user.schema.methods.generateAuthToken();
}

async function auth(req: Request) {
    const token = req.headers.authorization || req.header('Authentication');
    if (!token) throw 'Access denied. No token provided.';

    return await verify(token.slice(7), get('jwtPrivateKey'));
}

export default { post, auth };