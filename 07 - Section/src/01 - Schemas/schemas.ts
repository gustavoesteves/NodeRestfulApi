import * as mongoose from "mongoose";
import { User } from "../00 - Interfaces Models/model";

export default mongoose.connect('mongodb://localhost/db-first-example', { useNewUrlParser: true })
    .then(() => console.log('mongodb connected...'))
    .catch(err => console.log(err.message));

const user = new User({
    email: 'test1@test.com',
    password: 'Test@123',
    displayName: 'John Cabrito'
}).save();