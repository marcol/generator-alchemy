const Feature = require('../Feature')

module.exports = new Feature({
  devDependencies (gen) {
    const deps = []

    switch (gen.answers.styles) {
    case 'normalize':
      deps.push('normalize.css')
      break
    case 'material':
      deps.push('material-components-web')
      if (gen.answers.webpack) {
        deps.pus('sass-loader', 'sass', 'extract-loader')
      }
      break
    case 'foundation':
      deps.push('foundation-sites')
      break
    }

    return deps
  },
  prompt () {
    return [{
      type: 'list',
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
