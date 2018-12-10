import { Book } from "./models";

/**
 * the .populate function through the models
 * query the others documents
 */
export function getBook(name: string): Promise<any> {
    return new Promise((resolve, reject) => {
        Book
            .find({ title: name }, (err, docs) => {
                if (err) reject(err);
                resolve(docs);
            })
            .populate('Author', { _id: -1, name: 1, website: 1 })
            .populate('Editor', { _id: -1, name: 1, phone: 1 });
    });
}