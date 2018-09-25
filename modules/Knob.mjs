import { Controller } from './Controller.mjs';

export class Knob extends Controller {
    constructor( name, note ) {
        super( name, note );
        this.type = 'knob';
    }
}