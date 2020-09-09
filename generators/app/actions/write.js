const { info } = require('sugar-chalk')

module.exports = (gen) => {
  info('Writing files')

  let files = []
  const features = require('../features')
  const data = Object.assign({
    year: (new Date()).getFullYear()
  }, gen.answers)
  const packageJSON = {
    scripts: {}
  }

  // get scripts, settings and files from default and enabled features
  features.forEach((cur) => {
    const feat = require('../features/' + cur)
    const feature = cur.replace('.js', '')

    if (gen.answers[feature] || (feat.default && feat.default())) {
      Object.assign(packageJSON, feat.settings(gen))
      Object.assign(packageJSON.scripts, feat.scripts(gen))
      files = files.concat(feat.files(gen))
    }
  })

  // write template files
  gen.writeDestinationJSON('package.json', packageJSON)
  files.forEach((cur) => {
    gen.fs.copyTpl(
      gen.templatePath(cur.source),
      gen.destinationPath(cur.target),
      data)
  })
}
