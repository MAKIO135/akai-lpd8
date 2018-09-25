// note for modules import url
// <script type="module" src="./main.mjs?test=yo"></script>
// console.log( ( new URL( import.meta.url ) ).searchParams.get( 'test' ) );

import { AkaiLPD8 } from './modules/AkaiLPD8.mjs';

const LPD8 = new AkaiLPD8( { log: true } );

if( LPD8.init() ) {
    LPD8.K1.on( 'change', vel => console.log( vel ) );
}

console.log( LPD8 );