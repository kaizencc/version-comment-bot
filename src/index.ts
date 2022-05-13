import { readFile } from 'fs';
import * as path from 'path';
import * as core from '@actions/core';
import * as github from '@actions/github';
import { loadActionOptions } from './options';

async function run() {
  console.log('here');
  const options = loadActionOptions();
  console.log(options);

  const client = github.getOctokit(options.githubToken);
  const owner = github.context.repo.owner;
  const repo = github.context.repo.repo;
  await client.rest.issues.get({
    issue_number: 1,
    owner,
    repo,
  });
  const file = path.join(process.env.GITHUB_WORKSPACE ?? '', 'CHANGELOG.v2.md');
  readFile(file, (_err, data) => {
    console.log(data);
  });
}

run().catch(error => {
  console.log(error);
  core.setFailed(error.message);
});