import { Reactor } from './Reactor.mjs';

export class Controller extends Reactor {
    constructor( name, note ) {
        super();
        
        this.name = name;
        this.note = note;
        this.command = null;
        this.velocity = null;

        // register events
        this.registerEvent( 'change' );
    }
    
    update( command, velocity ) {
        this.command = command;
        this.velocity = velocity;
    
        // dispatch events
        this.dispatchEvent( 'change' );
    }

    change( callback ) {
        this.on( 'change', callback );
    }
}