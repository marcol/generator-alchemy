/*jshint node:true*/

module.exports = function (grunt) {

    'use strict';

    // show elapsed time at the end
    require('time-grunt')(grunt);

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        config: {
            src: 'src',
            dist: 'dist',
            images: 'bin',
            bower: 'src/bower_components'
        },

        'bower-install': {
            app: {
                html: '<%%= config.src %>/index.html',
                ignorePath: '<%%= config.src %>/'
            }
        },

        watch: {
            less: {
                files: ['<%%= config.src %>/styles/*.less'],
                tasks: ['less:dev', 'growl:less'],
                options: {
                    spawn: false,
                    interrupt: true
                },
            },
            livereload: {
                options: {
                    livereload: '<%%= connect.options.livereload %>'
                },
                files: [
                    '<%%= config.src %>/*.html',
                    '.tmp/styles/{,*/}*.css',
                    '{.tmp,<%%= config.src %>}/scripts/{,*/}*.js',
                    '<%%= config.src %>/<%%= config.images %>/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
                ]
            }
        },

        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname: 'localhost' // '0.0.0.0' to access the server from outside
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%%= config.src %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%%= config.dist %>',
                    livereload: false
                }
            }
        },

        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%%= config.dist %>/*',
                        '!<%%= config.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%%= config.src %>/scripts/{,*/}*.js'
            ]
        },

        rev: {
            dist: {
                files: {
                    src: [
                        '<%%= config.dist %>/scripts/{,*/}*.js',
                        '<%%= config.dist %>/styles/{,*/}*.css',
                        '<%%= config.dist %>/<%%= config.images %>/{,*/}*.{gif,jpeg,jpg,png,webp}',
                        '<%%= config.dist %>/fonts/{,*/}*.*'
                    ]
                }
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= config.src %>/<%%= config.images %>',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%%= config.dist %>/<%%= config.images %>'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= config.src %>/<%%= config.images %>',
                    src: '{,*/}*.svg',
                    dest: '<%%= config.dist %>/<%%= config.images %>'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {},
                files: [{
                    expand: true,
                    cwd: '<%%= config.src %>',
                    src: '*.html',
                    dest: '<%%= config.dist %>'
                }]
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%%= config.src %>',
                    dest: '<%%= config.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '<%%= config.images %>/{,*/}*.{webp,gif}',
                        'fonts/{,*/}*.*'
                    ]
                }]
            }
        },

        concurrent: {
            dist: [
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        },

        <% if (includeModernizr) { %>
        modernizr: {
            // Based on default settings on http://modernizr.com/download/
            'devFile': '<%%= config.bower %>/modernizr/modernizr.js',
            'outputFile': '<%%= config.dist %>/scripts/modernizr.js',
            'extra': {
                'shiv': true,
                'printshiv': false,
                'load': true,
                'mq': false,
                'cssclasses': true
            },
            'extensibility': {
                'addtest': false,
                'prefixed': false,
                'teststyles': false,
                'testprops': false,
                'testallprops': false,
                'hasevents': false,
                'prefixes': false,
                'domprefixes': false
            },
            'uglify': true,
            'parseFiles': true
        },
        <% } %>

        less: {
            dev: {
                options: {
                    sourceMap: true
                },
                files: {
                    '.tmp/styles/styles.css': '<%%= config.src %>/styles/styles.less'
                }
            },
            dist: {
                options: {
                    compress: true,
                    report: true
                },
                files: {
                    '<%%= config.dist %>/styles/styles.css': '<%%= config.src %>/styles/styles.less'
                }
            }
        },

    });

    // Tasks.
    grunt.registerTask('default', ['jshint', 'build']);

    grunt.registerTask('build', [
        'clean:dist',
        'concurrent:dist',
        <% if (includeModernizr) { %>'modernizr',<% } %>
        'less:dist',
        'copy:dist',
        'rev'
    ]);

    grunt.registerTask('serve', function (target) {
        
        if (target === 'build') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            <% if (includeModernizr) { %>'modernizr',<% } %>
            'less:dev',
            'connect:livereload',
            'watch'
        ]);
    });

};