export function first(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('First parallel promises...');
        }, 2000);
    });
}

export function second(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Second (more time) parallel promises...');
        }, 3000);
    });
}