const { info } = require('sugar-chalk')

module.exports = (gen) => {
  info('Writing files')

  const features = require('../features')
  let files = []
  const packageJSON = {
    scripts: {}
  }

  // get scripts, settings and files from default and enabled features
  features.forEach((cur) => {
    const feat = require('../features/' + cur)
    const feature = cur.replace('.js', '')

    if (gen.answers[feature] || feat.default) {
      Object.assign(packageJSON, feat.settings(gen.answers))
      Object.assign(packageJSON.scripts, feat.scripts)
      files = files.concat(feat.files)
    }
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
