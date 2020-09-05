module.exports = {
  files: [{
    source: '../templates/_.remarkrc.js',
    target: '.remarkrc.js'
  }],
  dependencies: [],
  devDependencies: [
    'remark-cli',
    'remark-preset-lint-recommended'
  ],
  scripts: {
    'lint:md': 'remark .'
  },
  settings () {
    return {}
  },
  prompt: (get) => {
    return [{
      type: 'confirm',
      name: 'remark',
      message: 'Do you want to add a markdown linting?',
      default: true
    }]
  }
}
