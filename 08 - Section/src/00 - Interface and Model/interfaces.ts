import * as mongoose from "mongoose";

export interface IBook extends mongoose.Document {
    title: string;
    editor: string;
    author: string;
    price: number;
}