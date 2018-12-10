import * as mongoose from "mongoose";
import { IAuthor, IBook, IEditor } from "./interface";

/**
 * Models
 */
export const Author = mongoose.model<IAuthor>('Author', new mongoose.Schema({
    name: String,
    bio: String,
    website: String
}));

export const Editor = mongoose.model<IEditor>('Editor', new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    website: String
}));

export const Book = mongoose.model<IBook>('Book', new mongoose.Schema({
    title: String,
    editor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Editor'
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    price: Number
}));