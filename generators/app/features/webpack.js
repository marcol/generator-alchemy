const Feature = require('../Feature')

module.exports = new Feature({
  priority: 2,
  files () {
    return [{
      source: '../templates/webpack/logo.svg',
      target: 'logo.svg'
    }, {
      source: '../templates/webpack/webpack.common.js',
      target: 'webpack.common.js'
    }, {
      source: '../templates/webpack/webpack.dev.js',
      target: 'webpack.dev.js'
    },
    {
      source: '../templates/webpack/webpack.prod.js',
      target: 'webpack.prod.js'
    },
    {
      source: '../templates/webpack/src/index.js',
      target: 'src/index.js'
    }]
  },
  devDependencies () {
    return [
      '@babel/core',
      '@babel/preset-env',
      'babel-eslint',
      'babel-loader',
      'clean-webpack-plugin',
      'css-loader',
      'eslint',
      'eslint-loader',
      'favicons-webpack-plugin',
      'file-loader',
      'html-loader',
      'html-webpack-plugin',
      'style-loader',
      'webp-loader',
      'webpack',
      'webpack-cli',
      'webpack-dev-server',
      'webpack-merge'
    ]
  },
  scripts () {
    return {
      build: 'webpack --config webpack.prod.js',
      start: 'webpack-dev-server --open --config webpack.dev.js',
      serve: 'yarn start'
    }
  },
  prompt () {
    return [{
      type: 'confirm',
      name: 'webpack',
      message: 'Do you want to use webpack?',
      default: true
    }]
  }
})
