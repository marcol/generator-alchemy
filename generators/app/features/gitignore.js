const Feature = require('../Feature')

module.exports = new Feature({
  files () {
    return [{
      source: '../templates/_.gitignore',
      target: '.gitignore'
    }]
  },
  prompt (get) {
    return [{
      type: 'confirm',
      name: 'gitignore',
      message: 'Do you want to add a gitignore file?',
      default: true
    }]
  }
})
