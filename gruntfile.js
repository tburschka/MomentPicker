module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt, { scope: ['devDependencies', 'dependencies'] });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        src: {
            js : 'src/MomentPicker.js',
            scss: 'src/MomentPicker.scss'
        },
        dist: {
            js: 'dist/MomentPicker.js'
        },
        qunit: {
            all: ['test/main.html']
        },
        jshint: {
            options: {
                "eqeqeq"   : true,
                "trailing" : true
            },
            all: [ '<%= src.js %>' ]
        },
        uglify: {
            all: {
                files: {
                    '<%= dist.js %>': [ '<%= src.js %>' ]
                }
            }
        },
        compass: {
            all: {
                options: {
                    sassDir: 'src',
                    cssDir: 'dist',
                    environment: 'production'
                }
            }
        },
        watch: {
            configFiles: {
                files: [ 'gruntfile.js', 'package.json' ],
                options: {
                    reload: true
                }
            },
            scripts: {
                files: ['src/*.*'],
                tasks: ['test', 'deploy'],
                options: {
                    interrupt: true,
                    debounceDelay: 100
                }
            }
        }
    });

    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('deploy', ['uglify', 'compass']);
};

