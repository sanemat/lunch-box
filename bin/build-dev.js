#!/usr/bin/env node

/* eslint-disable no-console */

const pify = require('pify');
const rimraf = require('rimraf');
const cpy = require('cpy');

pify(rimraf)('docs').then(result => cpy(['src/index.html'], 'docs')).then((result) => {
  console.log('It works fine.');
}).catch((result) => {
  console.error(result);
});
