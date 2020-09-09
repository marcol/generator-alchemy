const Feature = require('../../Feature')

module.exports = new Feature({
  files () {
    return [{
      source: '../templates/_.commitlintrc.json',
      target: '.commitlintrc.json'
    }, {
      source: '../templates/_ci.js',
      target: 'ci.js'
    }]
  },
  devDependencies () {
    return [
      '@commitlint/cli',
      '@commitlint/config-conventional',
      'husky',
      'shelljs',
      'sugar-chalk'
    ]
  },
  scripts () {
    return {
      test: 'exit 0',
      lint: 'exit 0',
      ci: 'node ci.js'
    }
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
  prompt () {
    return [{
      type: 'confirm',
      name: 'githooks',
      message: 'Do you want to use commitlint?',
      default: true
    }]
  }
})
