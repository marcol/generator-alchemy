[![NPM Downloads](https://img.shields.io/npm/dt/generator-alchemy?logo=npm&style=flat-square)](https://www.npmjs.com/package/generator-alchemy)
[![NPM Version](https://img.shields.io/npm/v/generator-alchemy?logo=npm&style=flat-square)](https://www.npmjs.com/package/generator-alchemy)
[![CI Tests](https://img.shields.io/github/workflow/status/marcol/generator-alchemy/CI?logo=github&style=flat-square)](https://github.com/marcol/generator-alchemy)

# generator-alchemy
`generator-alchemy` is a Yeoman generator to kick start web projects or just add missing items to your projects. It setups the environment with webpack, babel and a server. It also sets up the dotfiles to make sure code quality, reliability and test/build tools.

Feel free to suggest improvements.

## Install
Install Yeoman (CLI)
```bash
yarn add yo --global
````
If you are using npm run `npm install -g yo`

Now install the ultimate generator
```bash
yarn add generator-uncomplicated --global
```
or `npm install -g generator-uncomplicated`

Finally run the generator
```bash
yo uncomplicated
```
and follow the instruction, selecting the preferred options.

## Features

### License
Adds a [ISC license](https://en.wikipedia.org/wiki/ISC_license) file with the name and email of the author.

### JS linting
Adds [eslint](https://eslint.org/) with `eslintrc.json` and `eslintignore` configuration files. Installs eslint basic plugins. Sets [JavaScript Standard Style](https://standardjs.com/) as default. The script `lint:js` is added to `package.json`.

### Markdown linting
Markdown linting is done with [remarklint](https://github.com/remarkjs/remark-lint). It has the preset `remark-preset-lint-recommended`. The script `lint:md` is added to `package.json`.

### CSS linting
[Stylelint](https://stylelint.io/) is used to lint CSS. By default is using [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) you can configure the rules in the file `.stylelinrc.json`

### HTML linting
HTML liting is done with [htmlhint](https://htmlhint.com/docs/user-guide/getting-started). You can configure the rules by editing the file `.htmlhintrc`.

### githooks
Set githooks for commit and push. Adds linting to git commit through [commitlint](https://commitlint.js.org/#/). Also adds script `ci.js` to run on push.

### npm
Adds `.npmignore` file to remove assets from the package to be published, as default `__tests__` and `__mocks__` are removed. Also adds `.npmrc` file.

### gitignore
Adds `.gitignore` file to prevent tracking of wanted files or folder. It has already a set of common files that usually should not be part of the git repository.

### Jest
Sets up [jest](https://jestjs.io/) to be used for tests, with an example test. Also adds the test script.

## Cookbook
### Using on ongoing projects
You can add missing feature to your existing projects. The generator asks you if you want to override any of the files that it has on the list to create. To be safe apply it to a repository without uncommitted changes so you can test and revert to a previous version if necessary.
