import { model, Schema } from "mongoose";
import { sign } from "jsonwebtoken";
import { get } from "config";
import { IUser } from "../interfaces/user.interface";

export const UserModel = model<IUser>('User', new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }
}));

UserModel.schema.methods.GenerateAuthToken = function () {
    const token = sign({ _id: this._id }, get('jwtPrivateKey'));
    return token;
}