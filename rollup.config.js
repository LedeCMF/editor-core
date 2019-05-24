import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import bundleSize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'
import commonjs from 'rollup-plugin-commonjs';
import svgo from 'rollup-plugin-svgo'

const external = ['popper.js', 'vue', 'core-js']
const isProduction = !process.env.ROLLUP_WATCH

const plugins = [
    resolve(),
    bundleSize(),
    svgo(),
    commonjs(),
    vue({
        template: {
            isProduction,
            compilerOptions: {preserveWhitespace: false},
        },
        css: true,
    }),
    buble(),
]

export default {
    external,
    plugins,
    input: 'src/index.js',
    output: [
        {
            format: 'cjs',
            file: pkg['main'],
            exports: 'named',
        },
        {
            format: 'es',
            file: pkg['module']
        }
    ]
}
