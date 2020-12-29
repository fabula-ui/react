import babel from '@rollup/plugin-babel';
import extensions from 'rollup-plugin-extensions';
import external from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

const dist = 'dist';

export default {
    input: 'src/lib/index.js',
    output: [
        {
            file: `${dist}/bundle.cjs.js`,
            format: 'cjs'
        },
        {
            file: `${dist}/bundle.esm.js`,
            format: 'esm'
        },
        {
            file: `${dist}/bundle.umd.js`,
            format: 'umd',
            name: 'fabula-react'
        },
    ],
    plugins: [
        extensions({
            // Supporting Typescript files
            // Uses ".mjs, .js" by default
            extensions: ['.tsx', '.ts', '.jsx', '.js'],
            // Resolves index dir files based on supplied extensions
            // This is enable by default
            resolveIndex: true,
        }),
        external(),
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**',
        })
    ],
    external: Object.keys(pkg.peerDependencies || {}),
}