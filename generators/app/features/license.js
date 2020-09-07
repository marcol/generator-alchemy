const Feature = require('../Feature')

module.exports = new Feature({
  files () {
    return [{
      source: '../templates/_LICENSE',
      target: 'LICENSE'
    }]
  },
  settings () {
    return {
      license: 'ISC'
    }
  },
  prompt () {
    return [{
      type: 'confirm',
      name: 'license',
      message: 'Do you want to add a license (ISC)?',
      default: true
    }]
  }
})
