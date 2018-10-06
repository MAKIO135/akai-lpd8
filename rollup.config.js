import { terser } from "rollup-plugin-terser";

export default {
    input: 'src/AkaiLPD8.mjs',
    plugins: [
        terser()
    ],
    output: {
        file: 'dist/AkaiLPD8.min.js',
        format: 'umd',
        name: 'AkaiLPD8'
    }
};