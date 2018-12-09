import { Book } from "../00 - Interfaces Models/model";

export function Logical(): Promise<any> {
    // or 
    // and
    return new Promise((resolve, reject) => {
        Book
            .find({}, (err, docs) => {
                if (err) return reject(err);
                resolve(docs);
            })
            .and([{ editor: 'Santa Cruz das Almas' }, { price: { $gt: 90 } }]);
    });
}