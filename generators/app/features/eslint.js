module.exports = {
  files: [{
    source: '../templates/_.eslintrc.json',
    target: '.eslintrc.json'
  }, {
    source: '../templates/_.eslintignore',
    target: '.eslintignore.json'
  }],
  dependencies: [],
  devDependencies: [
    'eslint',
    'babel-eslint',
    'eslint-plugin-html',
    'eslint-plugin-markdown',
    'eslint-plugin-filenames',
    'eslint-plugin-json-format',
    'eslint-plugin-import',
    'eslint-plugin-node',
    'eslint-plugin-promise',
    'eslint-plugin-standard',
    'eslint-config-standard'
  ],
  scripts: {
    'lint:js': 'eslint'
  },
  settings () {},
  prompt: (get) => {
    return [{
      type: 'confirm',
      name: 'eslint',
      message: 'Do you want to use eslint?',
      default: true
    }]
  }
}
