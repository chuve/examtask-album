// Обязательная обёртка
module.exports = function(grunt) {

    // Задачи
    grunt.initConfig({

        // Склейка
        concat: {
            // js: {
            //     src: [
            //         'js/*.js',
            //     ],
            //     dest: 'build/script.js'
            // },
            lib: {
                src: [
                    'lib/jquery-1.10.2.min.js',
                    'lib/underscore-min.js',
                    'lib/backbone-min.js',
                    'lib/handlebars.js'
                ],
                dest: 'build/libs.js'
            },
            css: {
                src: 'css/*.css',
                dest: 'build/style.css'
            }
        },

        // Сервер
        connect: {
            test: {
                options: {
                    port: 8080,
                    base: '.',
                }
            }
        },

        // Отслеживание изменений в файлах
        watch: {
            options: {
                livereload: true,
            },
            statics:{
                files: ['<%= concat.css.src %>', 'js/*.js', '<%= concat.lib.src %>', 'index.html'],
                tasks: ['concat']
            },
            templates:{
                files: ['templates/*.handlebars'],
                tasks: ['handlebars']
            }
        },

        handlebars: {
            compile: {
                options:{
                    namespace: 'JST',
                    wrapped: true,
                    amd: true,
                    partialsUseNamespace: true
                },
                files: {
                    "js/templates.js": ['templates/*.handlebars']
                }
            }
        }
    });

    // Загрузка плагинов, установленных с помощью npm install
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    // Задача по умолчанию
    grunt.registerTask('default', ['connect', 'handlebars', 'watch']);
};