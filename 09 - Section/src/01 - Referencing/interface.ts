import * as mongoose from "mongoose";

/**
 * Interfaces
 */
export interface IAuthor extends mongoose.Document {
    name: string;
    bio: string;
    website: string;
}

export interface IEditor extends mongoose.Document {
    name: string;
    address: string;
    phone: string;
    website: string;
}

export interface IBook extends mongoose.Document {
    title: string;
    editor: string;
    author: string;
    price: number;
}

