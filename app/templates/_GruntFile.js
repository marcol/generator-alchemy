/*jshint node:true*/

module.exports = function (grunt) {

    'use strict';

    grunt.initConfig({

        config: {
            dev: 'src',
            dist: 'dist',
            bower: 'src/bower_components'
        },

        watch: {
            less: {
                files: ['<%= config.src %>/styles/*.less'],
                tasks: ['less:dev', 'growl:less'],
                options: {
                    spawn: false,
                    interrupt: true
                },
            }
        },

        less: {
            dev: {
                options: {
                    sourceMap: true
                },
                files: {
                    '<%= config.dev %>/styles/styles.css': '<%= config.dev %>/styles/styles.less'
                }
            },
            build: {
                options: {
                    compress: true,
                    report: true
                },
                files: {
                    '<%= config.dist %>/styles/styles.css': '<%= config.dev %>/styles/styles.less'
                }
            }
        },

        modernizr: {
            // Based on default settings on http://modernizr.com/download/
            'devFile' : '<%= config.bower %>/modernizr/modernizr.js',
            'outputFile' : '<%= config.dist %>/scripts/modernizr.js',
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
                title : 'testing'
            },
            less: {
                message : 'Less files compiled.',
                title : 'testing'
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