import * as mongoose from "mongoose";
import { IUser, IBook } from "./interfaces";


const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    displayName: String
});

const bookSchema = new mongoose.Schema({
    title: String,
    editor: String,
    author: String,
    price: Number
});

export const User = mongoose.model<IUser>("User", userSchema);

export const Book = mongoose.model<IBook>('Book', bookSchema);