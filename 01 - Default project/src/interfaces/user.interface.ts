import { Document } from "mongoose";

export interface IUser {
    name: string;
    email: string;
    username: string;
    password: string;
}

export interface IUserModel extends IUser, Document { }