/*
    AkaiLPD8.js
    ===========

    Disposition of controllers:
    PAD5  PAD6  PAD7  PAD8      K1  K2  K3  K4
    PAD1  PAD2  PAD3  PAD4      K5  K6  K7  K8

    On PROG 1:
    ==========
    Pads PAD1 -> PAD8: {
        command: 128 'note off' / 144 'note on',
        note: 36 -> 43,
        velocity: 0 -> 127
    }

    Sliders K1 -> K8: {
        command: 176 'continuous controller',
        note: 1 -> 8,
        velocity: 0 -> 127
    }
*/

import { Knob } from './Knob.mjs';
import { Pad } from './Pad.mjs';

// check WebMIDI
if( !navigator.requestMIDIAccess ) {
    console.error( 'This browser does not support WebMIDI.' );
}

const controllersNames = [ 'K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'PAD1', 'PAD2', 'PAD3', 'PAD4', 'PAD5', 'PAD6', 'PAD7', 'PAD8' ];
const controllersNotes = [ '1', '2', '3', '4', '5', '6', '7', '8', '36', '37', '38', '39', '40', '41', '42', '43' ];

export class AkaiLPD8 {
    /**
     * constructor
     * @param options Object
     * log: boolean, default: false
     * init: boolean, default: false
     * if not initialized on instanciation, call AkaiLPD8.init() is needed
     */
    constructor( { log = false, init = false } ) {
        this.log = log;
        this.initialized = false;
        if( init ) this.init();
    }

    init() {
        return new Promise( ( resolve, reject ) => {
            // init WebMIDI
            if( !navigator.requestMIDIAccess ) {
                reject( new Error( 'This browser does not support WebMIDI.' ) );
            }

            navigator.requestMIDIAccess().then(
                // on requestMIDIAccess success:
                midiAccess => {
                    if( this.log ) console.log( { midiAccess } );

                    for( const input of midiAccess.inputs.values() ) {
                        if( input.name === 'LPD8' ) {
                            controllersNames.forEach( ( name, i ) => {
                                this[ name ] = name.includes( 'PAD' ) ?
                                    new Pad( name, controllersNotes[ i ] ) :
                                    new Knob( name, controllersNotes[ i ] );
                            } );

                            input.addEventListener( 'midimessage', midiMessage => {
                                if( this.log ) console.log( { midiMessage } );

                                const [ command, note, velocity ] = midiMessage.data;
                                if( this.log ) console.log( { note, command, velocity } );

                                this[ controllersNames[ controllersNotes.indexOf( `${ note }` ) ] ].update( command, velocity );
                            } );

                            this.initialized = true;
                            resolve();
                        }
                    }

                    reject( new Error( 'LPD8 not found among your MIDI devices' ) );
                },

                // on requestMIDIAccess fail:
                e => {
                    console.log( { error: e } );
                    reject( new Error( 'Could not access your MIDI devices.' ) );
                }
            );
        } );
    }
}