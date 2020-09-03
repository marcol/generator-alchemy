module.exports = {
  files: [],
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
    'lint:js': 'eslint',
    lint: 'yarn lint:js'
  },
  settings: {},
  prompt: (get) => {
    return [{
      type: 'confirm',
      name: 'eslint',
      message: 'Do you want to use eslint?',
      default: true
    }]
  }
}
