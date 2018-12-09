import * as mongoose from "mongoose";
import { User } from "./00 - Interfaces Models/model";

mongoose.connect('mongodb://localhost/db-first-example', { useNewUrlParser: true })
    .then(() => console.log('mongodb connected...'))
    .catch(err => console.log(err.message));

// import Schemas from "./01 - Schemas/schemas";
// Schemas;

const result = User.find();
console.log(result);