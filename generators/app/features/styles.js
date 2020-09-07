const Feature = require('../Feature')

module.exports = new Feature({
  devDependencies () {
    return [
      'normalize.css'
    ]
  },
  prompt (get) {
    return [{
      type: 'checkbox',
      name: 'styles',
      message: 'What do you want to use for styling?',
      choices: [
        { name: 'Normalize.css', value: 'normalize' },
        { name: 'Material Design', value: 'material' },
        { name: 'Foundation', value: 'foundation' },
        { name: 'None', value: 'none' }
      ],
      default: true
    }]
  }
})
