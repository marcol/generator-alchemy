module.exports = {
  files: [{
    source: '../templates/_.stylelintrc.json',
    target: '.stylelintrc.json'
  }],
  dependencies: [],
  devDependencies: [
    'stylelint',
    'stylelint-config-standard'
  ],
  scripts: {
    'lint:css': 'stylelint **/*.css'
  },
  settings () {},
  prompt: (get) => {
    return [{
      type: 'confirm',
      name: 'styles',
      message: 'Do you want to use stylelint to lint CSS?',
      default: true
    }]
  }
}
