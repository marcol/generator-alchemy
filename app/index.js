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
                skipInstall: options['skip-install'],
                skipMessage: options['skip-install-message']
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
            console.log(this.pkg.description + '\n');
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

        prompts.push({
            name: 'projSource',
            message: 'What\'s the source folder name?',
            default: 'app'
        });

        prompts.push({
            name: 'projDist',
            message: 'What\'s the distribution folder name?',
            default: 'dist'
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
            this.projSource = props.projSource;
            this.projDist = props.projDist;

            // get features
            this.includeModernizr = false;
            this.includejQuery = false;
            this.includeHandlebars = false;
            props.features.forEach(function (element) {
                generator[element] = true;
            });

            cb();

        }.bind(this));

    };

    AlchemyGenerator.prototype.app = function app() {

        // app folder strcture
        this.mkdir(this.projSource);
        this.mkdir(this.projSource + '/scripts');
        this.mkdir(this.projSource + '/styles');
        this.mkdir(this.projSource + '/bin');

        // setup files
        this.template('_package.json', 'package.json');
        this.template('_bower.json', 'bower.json');
        this.template('_GruntFile.js', 'GruntFile.js');
        this.template('_README.md', 'README.md');

        // requirejs
        this.template('config-dev.js', this.projSource + '/config-dev.js');
        this.template('config-dist.js', this.projSource + '/config-dist.js');

        // content
        this.template('_index.html', this.projSource + '/index.html');
        this.template('_404.html', this.projSource + '/404.html');
        this.template('_robots.txt', this.projSource + '/robots.txt');
        this.template('_humans.txt', this.projSource + '/humans.txt');
        this.copy('_crossdomain.xml', this.projSource + '/crossdomain.xml');
    };

    AlchemyGenerator.prototype.scripts = function scripts() {
        this.copy('scripts/_main.js', this.projSource + '/scripts/main.js');
    };

    AlchemyGenerator.prototype.styles = function styles() {

        // base
        this.copy('styles/_animations.less', this.projSource + '/styles/animations.less');
        this.copy('styles/_icons.less', this.projSource + '/styles/icons.less');
        this.copy('styles/_mixins.less', this.projSource + '/styles/mixins.less');
        this.copy('styles/_vars.less', this.projSource + '/styles/vars.less');

        // styles
        this.copy('styles/_layout.less', this.projSource + '/styles/layout.less');
        this.copy('styles/_typography.less', this.projSource + '/styles/typography.less');
        this.copy('styles/_styles.less', this.projSource + '/styles/styles.less');

    };

    AlchemyGenerator.prototype.dotfiles = function dotfiles() {
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
        this.template('bowerrc', '.bowerrc');
    };

    AlchemyGenerator.prototype.features = function scripts() {

        if (this.includeHandlebars) {
            this.mkdir(this.projSource + '/templates');
        }

    };

    // export
    module.exports = AlchemyGenerator;

}(this));
