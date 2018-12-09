import * as mongoose from "mongoose";
import { IUser } from "./interfaces";

interface IUserModel extends IUser, mongoose.Document { }

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    displayName: String
});

export const User = mongoose.model<IUserModel>("User", userSchema);