# generator-alchemy [![Build Status](https://secure.travis-ci.org/marcol/generator-alchemy.png?branch=master)](https://travis-ci.org/marcol/generator-alchemy)

[![](http://yeoman.io/assets/img/yeoman-logo.png)](http://yeoman.io)


## Getting Started

### What is Alchemy?

Alchemy is an [Yeoman](http://yeoman.io) generator for Web apps, with RequireJS and LESS. You may add Modernizr, jQuery and Handlebars as optional items. RequireJS, LESS and Handlebars are fully supported by grunt tasks to enable a quick a smooth development workflow.

### Install

To install Alchemy generator you need NPM and Yeoman. To install Yeoman you just need to this:

```
$ npm install -g yo
```

To install generator-alchemy from npm, run:

```
$ npm install -g generator-alchemy
```

Now you just need to create the folder where you going to place your project and initiate the generator:

```
$ yo alchemy
```

Follow the instructions and choose the dependencies as you wish... and you are done!


## Basic Features

### RequireJS

All the JavaScript is written as AMD modules and required as needed. In development mode, the files are loaded asynchronously for easy debug. When building the distribution package, two uglified files are created: one with all the external resources modules (libraries, plugins...) and the second with all the implemented modules for your web app.

### LESS

The LESS files are distributed according to the [SMACSS](http://smacss.com/book/) guide.

Along the LESS files structure, there is the [normalize.less](https://github.com/additiveinverse/normalize.less) file that makes the browsers default properties normalised and predictable.

When editing (grunt serve) the LESS files are compiled into a CSS files with an updated source map.

The build process (grunt, grunt build or grunt serve:build) takes the LESS files and generates a single compressed CSS file.

## Optional Features

### Modernizr

### jQuery

### Handlebars

## File Structure

## Grunt Tasks

## Other Files

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
