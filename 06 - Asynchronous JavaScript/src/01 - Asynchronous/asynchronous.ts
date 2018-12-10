export function Asynchronous() {
    console.log('before');

    // without callbacks, promises or async/await
    const user = getUser(1);
    console.log(user);

    // callbacks
    getUserCallbacksHell(1, (userCallbacks) => {
        console.log('getting information callbacks hell...');
        getUserRepositories(userCallbacks.githubRepositories, (repo) => {
            console.log('getting information repositories hell...');
            getRepositoryCommits(repo[0], (commits) => {
                console.log('getting information commits hell...');
                // that shit we call: callbacks hell
                console.log(commits);
            });
        });
    });

    // callbacks with Named functions
    getUserCallbacks(1, namedGetUserRepositories);

    console.log('after');
}

// without callbacks, promises or async/await
function getUser(id: number) {
    setTimeout(() => {
        console.log('getting information without nothing...');
        return { id: 1, githubRepositories: 'Zequinha' };
    }, 2000);
}

// callbacks
function getUserCallbacksHell(id: number, callbacks) {
    setTimeout(() => {
        callbacks({ id: 1, githubRepositories: 'Zequinha' });
    }, 2000);
}

function getUserRepositories(githubRepository: string, callbacks) {
    setTimeout(() => {
        callbacks(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function getRepositoryCommits(repo: string, callbacks) {
    setTimeout(() => {
        callbacks('total commits: 10');
    }, 2000);
}

// callbacks with Named functions

function getUserCallbacks(id: number, callbacks) {
    setTimeout(() => {
        console.log('getting information callbacks...');
        callbacks({ id: 1, githubRepositories: 'Zequinha' });
    }, 2000);
}

function namedGetUserRepositories(userCallbacks) {
    getUserRepositories(userCallbacks.githubRepositories, namedGetRepositoryCommits);
}

function namedGetRepositoryCommits(repo) {
    getRepositoryCommits(repo[0], namedGetCommits);
}

function namedGetCommits(commits) {
    console.log('without hell');
    console.log(commits);
}