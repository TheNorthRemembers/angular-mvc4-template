module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dev: {
                options: {
                    paths: ["./Content/bootstrap/", "./Content/bootstrap/mixins/"],
                    yuicompress: true               
                },
                files: {
                    "./Content/bootstrap.css": "./Content/bootstrap/bootstrap.less"
                }
            },
            min: {
                options: {
                    compress: true,
                    sourceMap: true,
                    sourceMapFilename: "./Content/bootstrap.css.map",
                    sourceMapBasepath: "./Content/"
                },
                files: {
                    "./Content/bootstrap.min.css": "./Content/bootstrap/bootstrap.less"
                }
            }
        },
        //empty shell for custom uglify
        uglify: {
            options: {

            },
            build: {

            }
        },
        watch: {
            less: {
                files: ['/Content/bootstrap/*'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);

};