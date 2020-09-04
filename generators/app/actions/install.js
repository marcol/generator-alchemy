const { info } = require('sugar-chalk')

module.exports = (gen) => {
  info('Installing dependencies')

  const features = require('../features')
  let dependencies = []
  let devDependencies = []

  features.forEach((cur) => {
    if (gen.answers[cur]) {
      const feat = require('../features/' + cur)
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
