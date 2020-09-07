const Feature = require('../Feature')

module.exports = new Feature({
  files () {
    return [{
      source: '../templates/_jest-example.js',
      target: '__tests__/example.test.js'
    }]
  },
  devDependencies () {
    return [
      'jest',
      'eslint-plugin-jest'
    ]
  },
  scripts () {
    return {
      test: 'jest'
    }
  },
  settings () {
    return {
      overrides: [
        {
          files: [
            '**/{__tests__,tests}/*.{j,t}s?(x)',
            '**/{__tests__,tests}/**/*.{j,t}s?(x)'
          ],
          env: {
            'jest/globals': true
          }
        }
      ]
    }
  },
  prompt (get) {
    return [{
      type: 'confirm',
      name: 'jest',
      message: 'Do you want to use jest for your tests?',
      default: true
    }]
  }
})
