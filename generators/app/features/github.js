const Feature = require('../Feature')

module.exports = new Feature({
  files () {
    return [{
      source: '../templates/_.github/workflows/ci.yml',
      target: '.github/workflows/ci.yml'
    }, {
      source: '../templates/_.github/workflows/publish.yml',
      target: '.github/workflows/ci.yml'
    }]
  },
  prompt (get) {
    return [{
      type: 'confirm',
      name: 'github',
      message: 'Do you want to add a Github worklows?',
      default: true
    }]
  }
})
