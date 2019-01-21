module.exports = function(grunt) {
    'use strict';
  
    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);
  
    // Init config
    grunt.initConfig({

        // Removes old files.
        clean: ['dist'],

        // Copys the files from the src folder to the dist folder.
        copy: {
            js: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: '**.js',
                        dest: 'dist/'
                    }
                ]
            },
        },

        // Minifies the javascript files.
        uglify: {
            build: {
                options: {
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: 'dist/',
                    src: [
                        '*.js',
                        '!*.min.js'
                    ],
                    dest: 'dist/',
                    rename: function (dst, src) {
                        // To keep the source js files and make new files as `*.min.js`:
                        return dst + '/' + src.replace('.js', '.min.js');
                        // Or to override to src:
                        //return src;
                    }
                }]
            }
        },

        // Lints JS files for errors
        jshint: {
            build: {
                files: {
                src: ['src/**/*.js']
                }
            }
        },

        // Watches the project for changes and recompiles the output files.
        watch: {
            javascript: {
                files: 'src/**/*.js',
                tasks: ['jshint:build', 'copy:js', 'uglify:build']
            }
        }
    });

    // Default taks
    grunt.registerTask('default', ['clean', 'copy', 'uglify']);
};