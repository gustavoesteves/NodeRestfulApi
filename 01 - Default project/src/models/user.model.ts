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
        trim: true,
        validate: {
            validator: function (value: string) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
            },
            msg: 'Is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    }
});

UserSchema.methods.validatePassword = function (password: string) {
    return /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{7,20}$/.test(password);
}

UserSchema.methods.generateAuthToken = function (_id: string) {
    const token = sign({ _id: _id }, get('jwtPrivateKey'));
    return token;
}

export const UserModel = model<IUserModel>('User', UserSchema);