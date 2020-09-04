module.exports = {
  files: [{
    source: '../templates/_.npmignore',
    target: '.gitignore'
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
      name: 'npmignore',
      message: 'Do you want to add a npmignore file?',
      default: true
    }]
  }
}
