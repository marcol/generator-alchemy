const Feature = require('../../Feature')

module.exports = new Feature({
  files () {
    return [{
      source: '../templates/_.stylelintrc.json',
      target: '.stylelintrc.json'
    }]
  },
  scripts () {
    return {
      'lint:css': 'stylelint **/*.css'
    }
  },
  devDependencies () {
    return [
      'stylelint',
      'stylelint-config-standard'
    ]
  },
  prompt () {
    return [{
      type: 'confirm',
      name: 'css',
      message: 'Do you want to use stylelint to lint CSS?',
      default: true
    }]
  }
})
