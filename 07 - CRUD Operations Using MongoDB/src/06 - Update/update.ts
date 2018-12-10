import { Book } from "../00 - Interfaces Models/model";

export function FindById(id): Promise<any> {
    return new Promise((resolve, reject) => {
        Book
            .findById(id, (err, docs) => {
                if (err) return reject(err);
                resolve(docs);
            });
    });
}

export function Update(book): Promise<any> {
    return new Promise((resolve, reject) => {
        book.price = 109;
        book.save();
    });
}

/**
 * Documentation reference
 * https://docs.mongodb.com/manual/reference/operator/update/
 */

export function DirectUpdate(id): Promise<any> {
    return new Promise((resolve, reject) => {
        Book.update({_id: id}, {
            $set:{
                price: 89
            }
        },(err, raw) => {
            if (err) return reject(err);
                resolve(raw);
        });
    });
}