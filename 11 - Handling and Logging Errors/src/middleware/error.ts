export function error(err, req, res, next) {
    res.status(500).send('Deu ruim...');
}