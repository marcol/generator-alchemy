module.exports = {
  files: [{
    source: '../templates/_LICENSE',
    target: 'LICENSE'
  }],
  dependencies: [],
  devDependencies: [],
  scripts: {},
  settings () {
    return {
      license: 'ISC'
    }
  },
  prompt: (get) => {
    return [{
      type: 'confirm',
      name: 'license',
      message: 'Do you want to add a license (ISC)?',
      default: true
    }]
  }
}
