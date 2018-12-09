import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    email?: string;
    firstName?: string;
    lastName?: string;
}

export interface IBook extends mongoose.Document {
    title: string;
    editor: string;
    author: string;
    price: number;
}