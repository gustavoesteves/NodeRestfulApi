// Documantation reference
// https://nodejs.org/dist/latest-v10.x/docs/api/os.html

import * as os from "os";

export function module_3() {
    console.log(`Total Memory: ${os.totalmem()}`);
    console.log(`Free Memory: ${os.freemem()}`);
}
