# generator-alchemy [![Build Status](https://secure.travis-ci.org/marcol/generator-alchemy.png?branch=master)](https://travis-ci.org/marcol/generator-alchemy)

[![](http://yeoman.io/assets/img/yeoman-logo.png)](http://yeoman.io)


## Getting Started

### What is Alchemy?

Alchemy is an [Yeoman](http://yeoman.io) generator for Web apps, with RequireJS and LESS. You may add Modernizr, jQuery, Handlebars or Font-Awesome as optional items. RequireJS, LESS and Handlebars are fully supported by grunt tasks to enable a quick and smooth development workflow.

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

The behavior of RequireJS is defined by the files config-dev.js and config-dist. Visit this [RequireJS example build](https://github.com/jrburke/r.js/blob/master/build/example.build.js) to get more information.

### LESS

The LESS files are distributed according to the [SMACSS](http://smacss.com/book/) guide.

Along the LESS files structure, there is the [normalize.less](https://github.com/additiveinverse/normalize.less) file that makes the browsers default properties normalised and predictable.

When editing (grunt serve) the LESS files are compiled into a CSS files with an updated source map.

The build process (grunt, grunt build or grunt serve:build) takes the LESS files and generates a single compressed CSS file.

### Font-Awesome

[Font-Awesome](https://github.com/FortAwesome/Font-Awesome) is supported via LESS.

### Grunt Tasks

#### grunt build

 * Clean the build folder (dist)
 * Concatenates and uglifies the compiled LESS files
 * Compresses images
 * Compresses SVG files
 * Minifies HTML files
 * OPTIONAL: Concatenates and uglifies the compiled Handlebars templates
 * Concatenates and uglifies the JavaScript resources into 2 files (resources and main)
 * OPTIONAL: Generates the Modernizr dist file by parsing CSS and JavaScript files and defining all the required dependencies
 * Copies files from the development folder (app)
 * Adds revisions to static files

#### grunt

 * Runs JSHint against the JavaScript implemented code
 * Runs the build process

#### grunt serve

 * Clean server folder (.tmp)
 * Compile LESS files
 * OPTIONAL: Compile Handlebars templates
 * Checks RequireJS configuration
 * Start the connect server with livereload
 * Start watching files:
  * OPTIONAL: Compiles Handlebars templates on edit
  * Compiles LESS on edit
  * Reloads the webpage on any resource change

#### grunt serve:build

 * Runs the build process
 * Starts the node server (connect)


## Optional Features

### Modernizr

A full feature version of Modernizr is enabled for the development environment. When building the distribution package, a grunt task will check all JavaScript and CSS files to check which Modernizr dependencies are required and add them to the final uglified build file.

### jQuery
Includes jQuery as one of the resources dependency in RequireJS.

### Handlebars

The Handlebars templates should be added in the templates dev folder. In development mode each file change will force the compiler to recompile the templates into JavaScript that can be handled in the cliend side.
When building the distribution file all the templates will be compiled into an uglified JavaScript file.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
