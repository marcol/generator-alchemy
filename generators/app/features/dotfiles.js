const fs = require('fs')
const path = require('path')
const Feature = require('../Feature')
const features = {}
const dotfiles = fs.readdirSync(path.join(__dirname, 'dotfiles'))

dotfiles.forEach((item) => {
  features[item] = require('./dotfiles/' + item)
})

module.exports = new Feature({
  files (gen) {
    return gen.answers.dotfiles.map((cur) => {
      return features[cur].files()
    }).flat()
  },

  scripts (gen) {
    const scripts = {}
    gen.answers.dotfiles.forEach((cur) => {
      Object.assign(scripts, features[cur].scripts())
    })
    return scripts
  },

  settings (gen) {
    const settings = {}
    gen.answers.dotfiles.forEach((cur) => {
      Object.assign(settings, features[cur].settings())
    })
    return settings
  },

  dependencies (gen) {
    return gen.answers.dotfiles.map((cur) => {
      return features[cur].dependencies()
    }).flat()
  },

  devDependencies (gen) {
    return gen.answers.dotfiles.map((cur) => {
      return features[cur].devDependencies()
    }).flat()
  },

  prompt () {
    return [{
      type: 'checkbox',
      name: 'dotfiles',
      message: 'What configuration you want to add?',
      choices: dotfiles.map((cur) => {
        return { name: cur.replace('.js', ''), value: cur }
      }),
      default: dotfiles
    }]
  }
})
