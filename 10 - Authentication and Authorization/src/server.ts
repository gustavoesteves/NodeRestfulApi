import * as config from "config";

import { hash } from "./01 - Hashing password/hashing";
import { comparing } from "./02 - Comparing/comparing";
import { token } from "./03 - JSON Web Token/token";

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: environment variables not set...');
    process.exit(1);
}

hash('mulambo', 2).then(result => {
    console.log(result)
    comparing('mulamb', result).then(valid => console.log(valid));
});

token('virgilio@gmail.com')
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));