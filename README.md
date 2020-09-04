[![NPM Downloads](https://img.shields.io/npm/dt/generator-alchemy?logo=npm&style=flat-square)](https://www.npmjs.com/package/generator-alchemy)
[![NPM Version](https://img.shields.io/npm/v/generator-alchemy?logo=npm&style=flat-square)](https://www.npmjs.com/package/generator-alchemy)
[![CI Tests](https://img.shields.io/github/workflow/status/marcol/generator-alchemy/CI?logo=github&style=flat-square)](https://github.com/marcol/generator-alchemy)

# generator-alchemy
`generator-alchemy` is a Yeoman generator to kick start web projects. It setups
the environment with webpack, babel and a server. It also sets up the dotfiles
to make sure code quality, reliability and test/build tools.

Feel free to suggest improvements.

## Install
1. Install Yeoman (CLI)
```bash
yarn add yo --global
````
If you are using npm run `npm install -g yo`

1. Now install the ultimate generator
```bash
yarn add generator-uncomplicated --global
```
or `npm install -g generator-uncomplicated`

1. Finally run the generator
```bash
yo uncomplicated
```
and follow the instruction, selecting the preferred options.

## Features

### eslint
Adds [eslint](https://eslint.org/) with `eslintrc.json` and `eslintignore`
configuration files. Installs eslint basic plugins.
Sets [JavaScript Standard Style](https://standardjs.com/) as default.

### commitlint
Adds linting to git commit and push through [commitlint](https://commitlint.js.org/#/).

## Cookbook
