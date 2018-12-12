export function absolute(n: number) {
    return (n >= 0) ? n : -n;
}

export function greet(s: string) {
    return 'welcome ' + s;
}

export function getCountries() {
    return ['BRA', 'USA', 'CAD'];
}

export function getProduct(id: number) {
    return { id: id, product: 'Bubble blast' };
}

export function getUser(name: string) {
    if (!name) throw new Error('User Name required');
    return { id: 1, username: name };
}