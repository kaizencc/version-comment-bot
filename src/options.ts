import * as core from '@actions/core';

export interface TestOptions {
  /**
   * your github token
   */
  readonly githubToken: string;
}

export function loadActionOptions(): TestOptions {
  return {
    githubToken: core.getInput('github-token'),
  };
}
