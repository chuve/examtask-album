// Обязательная обёртка
module.exports = function(grunt) {

    // Задачи
    grunt.initConfig({

        // Склейка
        concat: {
            js: {
                src: [
                    'lib/jquery-1.10.2.min.js',
                    'lib/underscore-min.js',
                    'lib/backbone-min.js',
                    'js/*.js'
                ],
                dest: 'build/script.js'
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

        // Livereload сервер
        reload: {
            port: 35729,
            liveReload: {},
            proxy: {
                host: "localhost",
                port: 8080
            }
        },

        // Отслеживание изменений в файлах
        watch: {
            concat: {
                files: ['<%= concat.js.src %>', '<%= concat.css.src %>', 'index.html'],
                tasks: ['concat','reload']
            },
            options: {
              nospawn: true,
              interrupt: false,
              debounceDelay: 250
            }
        },
    });

    // Загрузка плагинов, установленных с помощью npm install
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-reload');

    // Задача по умолчанию
    grunt.registerTask('default', ['connect', 'reload', 'watch']);
};