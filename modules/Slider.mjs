import { Controller } from './Controller.mjs';

export class Slider extends Controller {
    constructor( name, note ) {
        super( name, note );
        this.type = 'slider';
    }
}