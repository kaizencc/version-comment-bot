import * as core from '@actions/core';
import { loadActionOptions } from './options';

async function run() {
  const options = loadActionOptions();
  console.log(options);
}

run().catch(error => {
  core.setFailed(error.message);
});