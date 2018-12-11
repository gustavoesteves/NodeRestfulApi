import * as logger from "winston";

export function error(err, req, res, next) {
    logger.info(err, 'Deu ruim log...', err);
    logger.error('kray...', err);
    res.status(500).send('Deu ruim...');
}