module.exports = {
  files: [{
    source: '../templates/_.github/workflows/ci.yml',
    target: '.github/workflows/ci.yml'
  }, {
    source: '../templates/_.github/workflows/publish.yml',
    target: '.github/workflows/ci.yml'
  }],
  dependencies: [],
  devDependencies: [],
  scripts: {},
  settings () {},
  prompt: (get) => {
    return [{
      type: 'confirm',
      name: 'github',
      message: 'Do you want to add a Github worklows?',
      default: true
    }]
  }
}
