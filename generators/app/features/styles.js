module.exports = {
  files: [],
  dependencies: [],
  devDependencies: [
    'normalize.css'
  ],
  scripts: {},
  settings () {},
  prompt: (get) => {
    return [{
      type: 'confirm',
      name: 'styles',
      message: 'What do you want to use for styling?',
      default: true
    }]
  }
}
