#!/usr/bin/env node

const pify = require('pify');
const rimraf = require('rimraf');

pify(rimraf)('docs').then(result => {
  console.log('It works fine.')
}).catch(result => {
  console.error(result);
});
