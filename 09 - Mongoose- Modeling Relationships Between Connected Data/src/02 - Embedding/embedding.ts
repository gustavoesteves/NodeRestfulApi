import { Book } from "./models";
import { IBook } from "./interface";

function getBook(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
        Book.findById(id, (err, docs) => {
            if (err) reject(err);
            resolve(docs);
        });
    });
}

function updateBookAuthor(book: IBook, nameAuthor: string): Promise<any> {
    return new Promise(() => {
        book.author.name = nameAuthor;
        book.save();
    });
}

export const result = getBook('')
    .then(book => updateBookAuthor(book, 'Ivanildo'))
    .then(result => console.log(result));