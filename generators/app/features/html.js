module.exports = {
  files: [{
    source: '../templates/_.htmlhintrc',
    target: '.htmlhintrc'
  }],
  dependencies: [],
  devDependencies: [
    'htmlhint'
  ],
  scripts: {
    'lint:html': 'htmlhint **/*.html'
  },
  settings () {},
  prompt: (get) => {
    return [{
      type: 'confirm',
      name: 'html',
      message: 'Do you want to use htmlhint to lint HTML?',
      default: true
    }]
  }
}
