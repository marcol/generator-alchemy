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
        console.log(this.yeoman);

        prompts.push({
            type: 'confirm',
            name: 'deploy',
            message: 'Do you want to deploy Alchemy generator?',
            default: true
        });

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


        this.prompt(prompts, function (props) {

            this.deploy = props.deploy;
            this.projName = props.projName;
            this.projVersion = props.projVersion;
            this.projAuthor = props.projAuthor;
            this.projDescription = props.projDescription;
            this.projUrl = props.projUrl;
            this.projKeywords = props.projKeywords;
            this.projRepository = props.projRepository;

            if (this.deploy) {
                cb();
            } else {
                return false;
            }

        }.bind(this));

    };

    AlchemyGenerator.prototype.app = function app() {

        // app folder strcture
        this.mkdir('app');
        this.mkdir('app/scripts');
        this.mkdir('app/templates');
        this.mkdir('app/styles');
        this.mkdir('app/bin');
        this.mkdir('app/dist');

        // server folder structure
        this.mkdir('server');

        // setup files
        this.template('_package.json', 'package.json');
        this.template('_bower.json', 'bower.json');
        this.template('_GruntFile.js', 'GruntFile.js');
        this.template('_README.md', 'README.md');

        // content
        this.template('_index.html', 'app/index.html');
        this.template('_404.html', 'app/404.html');
        this.template('_robots.txt', 'app/robots.txt');
        this.template('_humans.txt', 'app/humans.txt');
        this.copy('_crossdomain.xml', 'app/crossdomain.xml');
    };

    AlchemyGenerator.prototype.scripts = function scripts() {
        this.copy('scripts/_main.js', 'app/scripts/main.js');
    };

    AlchemyGenerator.prototype.styles = function styles() {

        // base
        this.copy('styles/_animations.less', 'app/styles/animations.less');
        this.copy('styles/_icons.less', 'app/styles/icons.less');
        this.copy('styles/_mixins.less', 'app/styles/mixins.less');
        this.copy('styles/_vars.less', 'app/styles/vars.less');

        // styles
        this.copy('styles/_layout.less', 'app/styles/layout.less');
        this.copy('styles/_typography.less', 'app/styles/typography.less');
        this.copy('styles/_styles.less', 'app/styles/styles.less');

        // css
        this.copy('dist/_styles.css', 'app/dist/styles.css');
        
    };

    AlchemyGenerator.prototype.dotfiles = function dotfiles() {
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
        this.copy('bowerrc', '.bowerrc');
    };

    AlchemyGenerator.prototype.grunt = function grunt() {
        // TODO run grunt scripts
    };

    // export
    module.exports = AlchemyGenerator;

}(this));
