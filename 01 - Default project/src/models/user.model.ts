import { model, Schema } from "mongoose";
import { sign } from "jsonwebtoken";
import { get } from "config";
import { IUserModel } from "../interfaces/user.interface";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }
});

UserSchema.methods.generateAuthToken = function () {
    const token = sign({ _id: this._id }, get('jwtPrivateKey'));
    return token;
}

export const UserModel = model<IUserModel>('User', UserSchema);