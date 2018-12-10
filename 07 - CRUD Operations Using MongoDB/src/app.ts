import * as mongoose from "mongoose";

mongoose.connect('mongodb://localhost/db-first-example', { useNewUrlParser: true })
    .then(() => console.log('mongodb connected...'))
    .catch(err => console.log(err.message));

// import Schemas from "./01 - Schemas/schemas";
// Schemas;

/*
import { getUser } from "./02 - Querying/querying";
getUser().then(result => {
    console.log(result);
});
*/

/*
import { Comparison, ComparisonFilters } from "./03 - Comparison Operators/comparison";
saveBook();
Comparison().then(result => console.log(result));
ComparisonFilters().then(result => console.log(result));
*/

// import { Logical } from "./04 - Logical Operators/logical";
// Logical().then(result => console.log(result));

// import { RegularExpressions } from "./05 - Regular Expressions/regular";
// RegularExpressions().then(result => console.log(result));

import { FindById, Update, DirectUpdate } from "./06 - Update/update";
// FindById('5c0cd5f3c5a4f33c747ef1d6').then(result => Update(result));
DirectUpdate('5c0cd5f3c5a4f33c747ef1d6');