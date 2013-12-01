/*jshint node:true*/

module.exports = function (grunt) {

    'use strict';

    // Project configuration.
    grunt.initConfig({

        'watch': {
            less: {
                files: ['app/styles/*.less'],
                tasks: ['less:dev', 'growl:less'],
                options: {
                    spawn: false,
                    interrupt: true
                },
            }
        },

        'less': {
            dev: {
                options: {
                    sourceMap: true
                },
                files: {
                    'app/dist/styles.css': 'app/styles/styles.less'
                }
            },
            build: {
                options: {
                    compress: true,
                    report: true
                },
                files: {
                    'app/dist/styles.css': 'app/styles/styles.less'
                }
            }
        },

        modernizr: {
            // Based on default settings on http://modernizr.com/download/
            'devFile' : 'app/bower_components/modernizr/modernizr.js',
            'outputFile' : 'app/dist/modernizr.js',
            'extra' : {
                'shiv' : true,
                'printshiv' : false,
                'load' : true,
                'mq' : false,
                'cssclasses' : true
            },
            'extensibility' : {
                'addtest' : false,
                'prefixed' : false,
                'teststyles' : false,
                'testprops' : false,
                'testallprops' : false,
                'hasevents' : false,
                'prefixes' : false,
                'domprefixes' : false
            },
            'uglify' : true,
            'tests' : [],
            'parseFiles' : true,
            'matchCommunityTests' : false,
            'customTests' : []
        },

        growl: {
            build: {
                message : 'Grunt build process finished.',
                title : '<%= _.slugify(projName) %>'
            },
            less: {
                message : 'Less files compiled.',
                title : '<%= _.slugify(projName) %>'
            }
        }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-growl');
    grunt.loadNpmTasks('grunt-modernizr');

    // Default task(s).
    grunt.registerTask('build', ['less:build', 'modernizr', 'growl:build']);
    grunt.registerTask('default', ['less:dev', 'watch']);

};