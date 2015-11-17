// Grant Harris - 2014
// www.grantharr.is
//----------------------------------------------------------------
//------------------------------------------------------------
//--------------------------------------------------------
//----------------------------------------------------



var rewriteRulesSnippet = require("grunt-connect-rewrite/lib/utils").rewriteRequest;
module.exports = function(grunt) {
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    watch: {
      scripts: {
        files: ['stylesheets/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      },

      html: {
        files: "**/*.html"
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
     
        files: {
          'stylesheets/main.css': 'stylesheets/main.scss'
        }
      } 
    },

    copy: {
      build: {
        cwd: 'grantharr.is',
        src: [ '**' ],
        dest: 'build',
        expand: true
      },
    },
    
    connect: {
      options: {
        port: 3000,
        open: true,
        hostname: "localhost"
      },
      
      rules: [{
        from: '(^((?!css|html|js|img|fonts|\/$).)*$)',
        to: "$1.html"
      }],
      
      dev: {
        options: {
          base: "./",
          middleware: function(connect, options) {
            return [rewriteRulesSnippet, connect["static"](require("path").resolve(options.base[0]))];
          }
        }
      },

    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks("grunt-connect-rewrite");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("default", ["configureRewriteRules", "connect:dev", "watch"]);
};








