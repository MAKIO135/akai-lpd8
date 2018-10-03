// note for modules import url
// <script type="module" src="./main.mjs?test=yo"></script>
// console.log( ( new URL( import.meta.url ) ).searchParams.get( 'test' ) );

import { AkaiLPD8 } from './modules/AkaiLPD8.mjs';

const LPD8 = new AkaiLPD8( { log: false } );

LPD8.init()
    .then( () => {
        console.log( LPD8 );
        LPD8.K1.on( 'change', vel => console.log( { vel } ) );
        LPD8.PAD5.noteOn( vel => console.log( { vel } ) );
    } )
    .catch( error => console.error( { error } ) );