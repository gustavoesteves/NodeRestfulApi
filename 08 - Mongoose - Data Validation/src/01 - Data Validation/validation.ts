import { Book } from "../00 - Interface and Model/models";
import * as mongoose from "mongoose";

/**
 * if we try to save the code below
 * the mongoose'll returned an error because
 * all fields of schema are required
 */

export function saveBook() {

    const book = new Book({
        title: 'A cor triste do Serro',
        editor: 'Santa Cruz das Almas',
        author: 'Enio Gonçalves'
    });

    book.save().catch(err => console.log(err.message));
}

/**
 * we can create a validation function in a schema
 */

interface IOtherBook extends mongoose.Document {
    title: string;
    editor: string;
    author: string;
    isPublished: boolean;
    price: number;
}

const schemaOtherBook = new mongoose.Schema({
    title: { 
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255
     },
    editor: { type: String, required: true },
    author: { type: String, required: true },
    isPublished: { type: String, default: false },
    price: {
        type: Number,
        required: function () {
            return this.isPublished
        }
    }
});