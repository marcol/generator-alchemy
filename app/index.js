/*jshint node:true*/

(function (global, undefined) {

    'use strict';

    var util = require('util'),
        path = require('path'),
        yeoman = require('yeoman-generator'),
        AlchemyGenerator;

    function extractGeneratorName(_, appname) {
        var slugged = _.slugify(appname),
            match = slugged.match(/^generator-(.+)/);

        if (match && match.length === 2) {
            return match[1].toLowerCase();
        }

        return slugged;
    }

    AlchemyGenerator = function AlchemyGenerator(args, options, config) {

        yeoman.generators.Base.apply(this, arguments);

        this.on('end', function () {
            this.installDependencies({
                skipInstall: options['skip-install']
            });
        });

        this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
    };

    util.inherits(AlchemyGenerator, yeoman.generators.Base);

    AlchemyGenerator.prototype.askFor = function askFor() {
        
        var prompts = [],
            cb = this.async();

        // have Yeoman greet the user.
        if (!this.options['skip-welcome-message']) {
            console.log(this.yeoman);
            console.log('Alchemy Generator!'); // FIXME
        }

        prompts.push({
            name: 'projName',
            message: 'What\'s your project name?',
            default: extractGeneratorName(this._, this.appname)
        });

        prompts.push({
            name: 'projVersion',
            message: 'What\'s your project version?',
            default: '0.0.0'
        });

        prompts.push({
            name: 'projAuthor',
            message: 'Who\'s the author?',
            default: ''
        });

        prompts.push({
            name: 'projDescription',
            message: 'Can you add a discription of the project?',
            default: ''
        });

        prompts.push({
            name: 'projKeywords',
            message: 'Can you add some keywords for the project?',
            default: ''
        });

        prompts.push({
            name: 'projRepository',
            message: 'What\'s the git repository url?',
            default: ''
        });

        prompts.push({
            name: 'projUrl',
            message: 'Can you add the project\'s url?',
            default: ''
        });

        // options
        prompts.push({
            type: 'checkbox',
            name: 'features',
            message: 'What more would you like?',
            choices: [{
                name: 'Modernizr',
                value: 'includeModernizr',
                checked: true
            }, {
                name: 'jQuery',
                value: 'includejQuery',
                checked: false
            }, {
                name: 'Handlebars',
                value: 'includeHandlebars',
                checked: false
            }, {
                name: 'Backbone',
                value: 'includeBackbone',
                checked: false
            }]
        });

        this.prompt(prompts, function (props) {

            var generator = this;

            this.projName = props.projName;
            this.projVersion = props.projVersion;
            this.projAuthor = props.projAuthor;
            this.projDescription = props.projDescription;
            this.projUrl = props.projUrl;
            this.projKeywords = props.projKeywords;
            this.projRepository = props.projRepository;

            // get features
            props.features.forEach(function (element) {
                generator[element] = true;
            });

            cb();

        }.bind(this));

    };

    AlchemyGenerator.prototype.app = function app() {

        // app folder strcture
        this.mkdir('src');
        this.mkdir('src/scripts');
        this.mkdir('src/styles');
        this.mkdir('src/bin');

        // server folder structure
        this.mkdir('server');

        // setup files
        this.template('_package.json', 'package.json');
        this.template('_bower.json', 'bower.json');
        this.template('_GruntFile.js', 'GruntFile.js');
        this.template('_README.md', 'README.md');

        // requirejs
        this.template('config-dev.js', 'src/config-dev.js');
        this.template('config-dist.js', 'src/config-dist.js');

        // content
        this.template('_index.html', 'src/index.html');
        this.template('_404.html', 'src/404.html');
        this.template('_robots.txt', 'src/robots.txt');
        this.template('_humans.txt', 'src/humans.txt');
        this.copy('_crossdomain.xml', 'src/crossdomain.xml');
    };

    AlchemyGenerator.prototype.scripts = function scripts() {
        this.copy('scripts/_main.js', 'src/scripts/main.js');
    };

    AlchemyGenerator.prototype.styles = function styles() {

        // base
        this.copy('styles/_animations.less', 'src/styles/animations.less');
        this.copy('styles/_icons.less', 'src/styles/icons.less');
        this.copy('styles/_mixins.less', 'src/styles/mixins.less');
        this.copy('styles/_vars.less', 'src/styles/vars.less');

        // styles
        this.copy('styles/_layout.less', 'src/styles/layout.less');
        this.copy('styles/_typography.less', 'src/styles/typography.less');
        this.copy('styles/_styles.less', 'src/styles/styles.less');

    };

    AlchemyGenerator.prototype.dotfiles = function dotfiles() {
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
        this.copy('bowerrc', '.bowerrc');
    };

    AlchemyGenerator.prototype.features = function scripts() {

        if (this.includeHandlebars) {
            this.mkdir('src/templates');
        }

    };

    // export
    module.exports = AlchemyGenerator;

}(this));
