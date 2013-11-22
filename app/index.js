/*jshint node:true*/

(function (global, undefined) {

    'use strict';

    var util = require('util'),
        path = require('path'),
        yeoman = require('yeoman-generator'),
        AlchemyGenerator;

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

        this.prompt(prompts, function (props) {

            this.deploy = props.deploy;

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
        this.mkdir('app/css');
        this.mkdir('app/bin');
        this.mkdir('app/dist');

        // server folder structure
        this.mkdir('server');

        // setup files
        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
        this.copy('_GruntFile.js', 'GruntFile.js');
        this.copy('_README.md', 'README.md');
        this.copy('_main.js', 'app/scripts/main.js');

        // content
        this.copy('_index.html', 'index.html');
    };

    AlchemyGenerator.prototype.projectfiles = function projectfiles() {
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
        this.copy('bowerrc', '.bowerrc');
    };

    // export
    module.exports = AlchemyGenerator;

}(this));
