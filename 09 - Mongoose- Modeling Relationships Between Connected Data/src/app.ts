import * as mongoose from "mongoose";

mongoose.connect('mongodb://localhost/db-first-example', { useNewUrlParser: true })
    .then(() => console.log('mongodb connected...'))
    .catch(err => console.log('deu errinho', err.message));