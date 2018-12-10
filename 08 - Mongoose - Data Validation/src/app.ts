import * as mongoose from "mongoose";
import { Book } from "./00 - Interface and Model/models";

mongoose.connect('mongodb://localhost/db-first-example', { useNewUrlParser: true })
    .then(() => console.log('mongodb connected...'))
    .catch(err => console.log('deu errinho', err.message));