import * as EventEmitter from "events";

export class Logger extends EventEmitter {
    log(message: string){
        console.log(message);

        // Raise event
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}