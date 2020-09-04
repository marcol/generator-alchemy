module.exports = {
  files: [{
    source: '../templates/_.commitlintrc.json',
    target: '.commitlintrc.json'
  }],
  dependencies: [],
  devDependencies: [
    '@commitlint/cli',
    '@commitlint/config-conventional',
    'husky'
  ],
  scripts: {
    test: 'exit 0'
  },
  settings () {
    return {
      husky: {
        hooks: {
          'pre-push': 'yarn test',
          'pre-commit': 'yarn lint',
          'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
        }
      }
    }
  },
  prompt: (get) => {
    return [{
      type: 'confirm',
      name: 'commitlint.js',
      message: 'Do you want to use commitlint?',
      default: true
    }]
  }
}
