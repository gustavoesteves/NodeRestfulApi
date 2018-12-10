import { Book } from "../00 - Interfaces Models/model";

export function RegularExpressions(): Promise<any> {
    return new Promise((resolve, reject) => {
        Book
            .find({ title: /mi/i }, (err, docs) => {
                if (err) return reject(err);
                resolve(docs);
            });
    });
}