class Event {
    constructor( name ) {
        this.name = name;
        this.callbacks = [];
    }

    registerCallback( callback ) {
        this.callbacks.push( callback );
    }
}

export class Reactor {
    constructor() {
        this.events = {};
    }

    registerEvent( eventName ) {
        this.events[ eventName ] = new Event( eventName );
    }

    dispatchEvent( eventName, eventArgs ) {
        this.events[ eventName ].callbacks.forEach( callback => callback( eventArgs ) );
    }

    on( eventName, callback ) {
        this.events[ eventName ].registerCallback( callback );
    }
}