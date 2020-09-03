const { info } = require('sugar-chalk')

module.exports = (gen) => {
  info('Writing files')

  const features = require('../features')
  let files = []
  const packageJSON = {
    name: gen.answers.project,
    version: '0.1.0',
    description: '',
    keywords: [],
    homepage: '',
    bugs: '',
    repository: {
      type: '',
      url: ''
    },
    author: [gen.answers.name, ' <', gen.answers.email, '>'].join(''),
    scripts: {}
  }

  // get scripts and settings
  features.forEach((cur) => {
    const feat = require('../features/' + cur)
    Object.assign(packageJSON.scripts, feat.scripts)
    Object.assign(packageJSON, feat.settings)
    files = files.concat(feat.files)
  })

  // write template files
  gen.writeDestinationJSON('package.json', packageJSON)
  files.forEach((cur) => {
    gen.fs.copyTpl(
      gen.templatePath(cur.source),
      gen.destinationPath(cur.target),
      gen.answers)
  })
}
