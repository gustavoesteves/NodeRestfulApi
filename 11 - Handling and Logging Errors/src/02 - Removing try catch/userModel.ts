import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    name: string;
    email: string;
    password: string;
}

export const UserModel = mongoose.model<IUser>('User', new mongoose.Schema({
    name: String,
    email: String,
    password: String
}));