module.exports = {
  files: [{
    source: '../templates/_.npmignore',
    target: '.gitignore'
  }, {
    source: '../templates/_.npmrc',
    target: '.gitrc'
  }],
  dependencies: [],
  devDependencies: [],
  scripts: {},
  settings () {
    return {}
  },
  prompt: (get) => {
    return [{
      type: 'confirm',
      name: 'npm',
      message: 'Do you want to add npm (ignore and rc) config files?',
      default: true
    }]
  }
}
