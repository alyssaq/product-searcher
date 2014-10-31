module.exports = function(grunt) {
  require('time-grunt')(grunt);
  grunt.loadNpmTasks('grunt-notify');
  require('load-grunt-config')(grunt, {
    jitGrunt: true
  });
};
