import resolve from '@rollup/plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import copy from 'rollup-plugin-copy';

const copyConfig = {};

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = {
  input: './fomosdk.js',
  output: {
    dir: 'build/',
    format: 'esm',
  },
  plugins: [
    minifyHTML(),
    copy(copyConfig),
    resolve(),
  ],
};

export default config;