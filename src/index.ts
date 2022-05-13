import * as core from '@actions/core';
import { loadActionOptions } from './options';

async function run() {
  // loadActionOptions() is a function generated by projen.
  // if you don't want to projen to manage this, you can set 'manageOptionsFile' to 'false' in .projenrc.js
  const options = loadActionOptions();
  console.log(options);
}

run().catch(error => {
  core.setFailed(error.message);
});