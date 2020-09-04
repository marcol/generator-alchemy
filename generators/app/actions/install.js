const { info } = require('sugar-chalk')

module.exports = (gen) => {
  info('Installing dependencies')

  const features = require('../features')
  let dependencies = []
  let devDependencies = []

  // get dependencies from default and enabled packages
  features.forEach((cur) => {
    const feat = require('../features/' + cur)
    const feature = cur.replace('.js', '')

    if (gen.answers[feature] || feat.default) {
      dependencies = dependencies.concat(feat.dependencies)
      devDependencies = devDependencies.concat(feat.devDependencies)
    }
  })

  // install dependencies
  gen.yarnInstall(dependencies, {
    save: true,
    skipMessage: true,
    silent: true
  })

  // install dev dependencies
  gen.yarnInstall(devDependencies, {
    dev: true,
    skipMessage: true,
    silent: true
  })
}
