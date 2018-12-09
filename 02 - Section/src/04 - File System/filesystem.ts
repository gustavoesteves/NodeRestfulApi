// Documantation reference
// https://nodejs.org/dist/latest-v10.x/docs/api/fs.html

import * as fs from "fs";

export function module_4() {
    fs.readdir('./', (err, files) => {
        if(err) console.log(err);
        else console.log(files);
    });    
}
