import * as mongoose from "mongoose";
import * as config from "config";
import * as jwt from "jsonwebtoken";
import { IUser } from "./interfaces";

const UserModel = mongoose.model<IUser>('User', new mongoose.Schema({
    name: String,
    email: String,
    password: String
}));

UserModel.schema.methods.generateAuthToken = function () {
    return jwt.sign({ email: this.email }, config.get('jwtPrivateKey'));
}