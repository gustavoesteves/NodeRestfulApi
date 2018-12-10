import { Book } from "../00 - Interfaces Models/model";

export function Comparison(): Promise<any> {
    // eq (equal)
    // ne (not equal)
    // gt (greater than)
    // gte (greater than or equal to)
    // lt (less than)
    // lte (less than or equal to)
    // in
    // nin (not in)
    return new Promise((resolve, reject) => {
        Book.find({ price: { $gt: 100 } }, (err, docs) => {
            if (err) return reject(err.message);
            resolve(docs);
        });
    });
}

export function ComparisonFilters(): Promise<any> {
    return new Promise((resolve, reject) => {
        Book
            .find({}, (err, docs) => {
                if (err) return reject(err.message);
                resolve(docs);
            })
            .limit(10)
            .sort({ title: 1 });
    });
}