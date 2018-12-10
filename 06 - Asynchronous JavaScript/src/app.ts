// import { Asynchronous } from "./01 - Asynchronous/asynchronous";
// Asynchronous();

/*
import { getRepositoryCommits, getUserCallbacksHell, getUserRepositories } from "./02 - Promises/promises";
getUserCallbacksHell(1)
    .then(user => getUserRepositories(user))
    .then(repo => getRepositoryCommits(repo[0]))
    .then(result => console.log(result));
*/

/*
import { firstParallel, secondParallel } from "./03 - Parallel/parallel";
Promise.all([firstParallel(), secondParallel()])
    .then(result => console.log(result));

Promise.race([firstParallel(), secondParallel()])
    .then(result => console.log(result));
*/

// Async await approach
import { first, second } from "./04 - Async await/asyncawait";
async function AsyncAwait() {
    try {
        const _first = await first();
        const _second = await second();
        console.log(_first + _second);            
    } catch (error) {
        console.log(error.message);
    }
}

AsyncAwait();