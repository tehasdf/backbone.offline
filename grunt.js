/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-jasmine-runner');

  // Project configuration.
  grunt.initConfig({
    jasmine : {
      src: [
        "vendor/underscore.js",
        "vendor/jquery-1.8.3.js",
        "vendor/backbone.js",
        "vendor/rosie.js",
        "src/util.js",
        "src/offline.js",
        "src/query.js",
        "src/memory.store.js",
        "src/indexeddb.store.js",
        "src/store.js",
        "src/manager.js",
        "src/synchronizer.js",
        "src/status.js",
        "src/strategy.js",
        "vendor/jasmine.async.js"
      ],
      specs: [
        "test/fixtures.js",
        "test/models.js",
        "test/store.test.js",
        "test/manager.test.js",
        "test/synchronizer.test.js",
        "test/strategy.test.js",
        "test/storyline.test.js",
        "test/offline.test.js",
        "test/integration.test.js"
      ]
    },
    'jasmine-server' : {
      browser : false
    }

  });
};