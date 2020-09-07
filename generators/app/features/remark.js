const Feature = require('../Feature')

module.exports = new Feature({
  files () {
    return [{
      source: '../templates/_.remarkrc.js',
      target: '.remarkrc.js'
    }]
  },
  devDependencies () {
    return [
      'remark-cli',
      'remark-preset-lint-recommended'
    ]
  },
  scripts () {
    return {
      'lint:md': 'remark .'
    }
  },
  prompt () {
    return [{
      type: 'confirm',
      name: 'remark',
      message: 'Do you want to add a markdown linting?',
      default: true
    }]
  }
})
