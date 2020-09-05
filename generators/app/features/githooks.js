module.exports = {
  files: [{
    source: '../templates/_.commitlintrc.json',
    target: '.commitlintrc.json'
  }, {
    source: '../templates/_ci.js',
    target: 'ci.js'
  }],
  dependencies: [],
  devDependencies: [
    '@commitlint/cli',
    '@commitlint/config-conventional',
    'husky',
    'shelljs',
    'sugar-chalk'
  ],
  scripts: {
    test: 'exit 0',
    lint: 'exit 0',
    ci: 'node ci.js'
  },
  settings () {
    return {
      husky: {
        hooks: {
          'pre-push': 'yarn ci',
          'pre-commit': 'yarn lint',
          'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
        }
      }
    }
  },
  prompt: (get) => {
    return [{
      type: 'confirm',
      name: 'githooks',
      message: 'Do you want to use commitlint?',
      default: true
    }]
  }
}
