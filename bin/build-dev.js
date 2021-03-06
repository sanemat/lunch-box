#!/usr/bin/env node

/* eslint-disable no-console */

const pify = require('pify');
const rimraf = require('rimraf');
const cpy = require('cpy');

pify(rimraf)('docs').then(() => cpy(['src/index.html', 'src/dokaben-blueback.png'], 'docs')).then(() => {
  console.log('It works fine.');
}).catch((result) => {
  console.error(result);
});
