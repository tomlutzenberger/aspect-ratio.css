
/*global module:false*/

module.exports = function (grunt) {

  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // watch task
    watch: {
      css: {
        files: 'dist/*.css',
        tasks: ['csslint'],
        options: {}
      },
      less: {
        files: 'less/*.less',
        tasks: ['less'],
        options: {}
      }
    },

    less: {
      development: {
        options: {
          compress: false
        },
        files: {
          'dist/aspect-ratio.css': 'less/aspect-ratio.less'
        }
      },
      productive: {
        options: {
          compress: true
        },
        files: {
          'dist/aspect-ratio.min.css': 'less/aspect-ratio.less'
        }
      }
    },

    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      strict: {
        options: {
          import: 2
        },
        src: 'dist/*.css'
      },
      lax: {
        options: {
          import: false
        },
        src: 'dist/*.css'
      }
    }
  });

  // Tasks registrieren
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-csslint');


  grunt.registerTask('default', 'watch');

};
