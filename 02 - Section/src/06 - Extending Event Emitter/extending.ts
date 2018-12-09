import { Logger } from "./logger";

export function module_6() {
    const logger = new Logger();

    // Register listner
    logger.on('messageLogged', arg => {
        console.log('Listner called', arg);
    });

    logger.log('Anirri');
}

