const Feature = require('../Feature')

module.exports = new Feature({
  files () {
    return [{
      source: '../templates/_.npmignore',
      target: '.gitignore'
    }, {
      source: '../templates/_.npmrc',
      target: '.gitrc'
    }]
  },
  prompt () {
    return [{
      type: 'confirm',
      name: 'npm',
      message: 'Do you want to add npm (ignore and rc) config files?',
      default: true
    }]
  }
})
