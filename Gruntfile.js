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
      compress : {
        options: {
          wrap : 'UserMnge',
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: {
          'build/<%= pkg.name %>.min.js' : ['src/**/*.js']
        }
      },
      concat : {
        options: {
          wrap : 'UserMnge',
          mangle: false,
          beautify: true,
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: {
          'build/<%= pkg.name %>.js' : ['src/**/*.js']
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
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('webserver', ['connect:devserver']);
};