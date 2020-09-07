const { info } = require('sugar-chalk')

module.exports = (gen) => {
  info('We need some input from you to setup your project')

  const features = require('../features')
  const prompts = features.map((cur) => {
    const feat = require('../features/' + cur)
    return {
      prompt: feat.prompt(gen),
      priority: feat.priority()
    }
  })

  prompts.sort((a, b) => a.priority - b.priority)
  return prompts.map((cur) => cur.prompt).flat()
}
