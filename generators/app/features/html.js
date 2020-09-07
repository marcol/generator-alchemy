const Feature = require('../Feature')

module.exports = new Feature({
  files () {
    return [{
      source: '../templates/_.htmlhintrc',
      target: '.htmlhintrc'
    }]
  },
  devDependencies () {
    return [
      'htmlhint'
    ]
  },
  scripts () {
    return {
      'lint:html': 'htmlhint **/*.html'
    }
  },
  settings () {},
  prompt () {
    return [{
      type: 'confirm',
      name: 'html',
      message: 'Do you want to use htmlhint to lint HTML?',
      default: true
    }]
  }
})
