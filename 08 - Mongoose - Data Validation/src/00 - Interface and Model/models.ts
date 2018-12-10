import * as mongoose from "mongoose";
import { IBook } from "./interfaces";

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    editor: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true }
});

export const Book = mongoose.model<IBook>('Book', bookSchema);