module.exports = function(grunt) {
  var hostname = 'localhost';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      devserver: {
        options: {
          hostname: hostname,
          keepalive: true
        }
      },
      testserver: {
        options: {
          hostname: hostname,
          keepalive: false
        }
      }
    },
    uglify: {
      options: {
        wrap : 'UserMnge',
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build : {
        files: {
          'build/<%= pkg.name %>.min.js' : ['src/**/*.js']
        }
      }
    },
    watch: {
        files: 'src/**/*.js',
        tasks: ['uglify']
      }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('webserver', ['connect:devserver']);
};