export function anotherMiddleware(req, res, next) {
    console.log('same idea, other place...');
    next();
}