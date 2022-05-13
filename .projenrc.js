const { GitHubActionTypeScriptProject, RunsUsing } = require('projen-github-action-typescript');
const project = new GitHubActionTypeScriptProject({
  defaultReleaseBranch: 'main',
  devDeps: ['projen-github-action-typescript'],
  name: 'version-comment-bot',
  actionMetadata: {
    runs: {
      main: 'dist/index.js',
      using: RunsUsing.NODE_16,
    },
    author: 'Kaizen Conroy',
    description: 'A bot that comments on PRs with the version it was released in',
    name: 'VersionCommentBot',
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();