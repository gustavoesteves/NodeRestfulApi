import { User } from "../00 - Interfaces Models/model";
import { IUser } from "../00 - Interfaces Models/interfaces";

export function getUser(): Promise<any> {
    return new Promise((resolve, reject) => {
        User.find({}, (err, docs) => {
            resolve(docs);
        });
    });
}