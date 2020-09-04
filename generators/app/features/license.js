module.exports = {
  files: [{
    source: '../templates/_license',
    target: 'license'
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
