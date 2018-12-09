import { Book } from "../00 - Interfaces Models/model";

export function DeleteOne(id): Promise<any> {
    return new Promise((resolve, reject) => {
        Book.deleteOne({ _id: id }, (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
}