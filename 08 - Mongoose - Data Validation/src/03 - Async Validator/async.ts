import * as mongoose from "mongoose";

interface ICustomBook extends mongoose.Document {
    title: string;
    editor: string;
    author: string;
    tag: [];
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
    tag: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function (v, callback) {
                setTimeout(() => {
                    callback(v.length > 0);
                }, 2000);
            },
            message: 'A book need a tag.'
        }
    },
    isPublished: { type: String, default: false },
    price: {
        type: Number,
        required: function () {
            return this.isPublished
        }
    }
});