module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
        css: {
          files: ['css/*.scss'],
          tasks: ['sass'],
        }
    },


    sass: {
        dist: {
            options: {
                style: 'expanded'
            },
            files: {
                'css/custom.css': 'css/custom.scss'
            }
        } 
    },


  });

  // Load the plugin that provide the tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['watch','sass']);

};