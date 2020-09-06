module.exports = {
  files: [{
    source: '../templates/_.gitignore',
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
      name: 'gitignore',
      message: 'Do you want to add a gitignore file?',
      default: true
    }]
  }
}
