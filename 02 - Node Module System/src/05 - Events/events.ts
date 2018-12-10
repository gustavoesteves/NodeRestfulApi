// Documantation reference
// https://nodejs.org/dist/latest-v10.x/docs/api/events.html

import * as EventEmitter from "events";

const emitter = new EventEmitter();

export function module_5() {
    // Register listner
    emitter.on('messageLogged', message => {
        console.log('Listner called');
    });

    // Raise event
    emitter.emit('messageLogged');
}

export function module_5_arguments() {
    // Register listner
    emitter.on('messageLogged', arg => {
        console.log('Listner called', arg);
    });

    // Raise event
    emitter.emit('messageLogged', { id: 1, url: 'http://' });
}
