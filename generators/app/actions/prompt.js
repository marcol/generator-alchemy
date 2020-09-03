const { info } = require('sugar-chalk')

module.exports = (gen) => {
  info('We need some input from you to setup your project')

  const features = require('../features')
  const prompts = features.map((cur) => {
    return require('../features/' + cur).prompt(gen)
  })

  return prompts.flat()
}
