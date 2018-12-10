export function getUserCallbacksHell(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, githubRepositories: 'Zequinha' });
        }, 2000);
    });
}

export function getUserRepositories(githubRepository: string): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

export function getRepositoryCommits(repo: string): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('total commits: 10');
        }, 2000);
    });
}