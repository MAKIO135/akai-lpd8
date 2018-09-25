import { AkaiLPD8 } from './modules/AkaiLPD8.mjs';

// console.log( ( new URL( import.meta.url ) ).searchParams.get( 'test' ) );

const LPD8 = new AkaiLPD8( { log: true } );

if( LPD8.init() ) {
    LPD8.K1.on( 'change', () => console.log( LPD8.K1.velocity ) );
}

console.log( LPD8 );