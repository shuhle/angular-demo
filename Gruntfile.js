module.exports = function(grunt) {

  grunt.initConfig({
    docular: {
      docular_webapp_target: "docs",
      groups: [],
      showDocularDocs: false,
      showAngularDocs: false
    }
  });

  grunt.loadNpmTasks('grunt-docular');

  grunt.registerTask('default', ['docular']);

};
