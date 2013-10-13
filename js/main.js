require.config({

	baseUrl: '/examtask-album/js',

    paths: {

        jquery: 'libs/jquery-1.10.2.min',
        backbone: 'libs/backbone-min',
        localstorage: 'libs/backbone.localStorage-min',
        underscore: 'libs/underscore-min',
        handlebars: 'libs/handlebars',

        app: 'app',
        router: 'Router',
        templates: 'Templates',
        data: 'Data',

        studentview: 'views/StudentView',
        studentsview: 'views/StudentsView',
        lectureview: 'views/LectureView',
        lecturesview: 'views/LecturesView',
		singlepageview: 'views/SinglePageView',
		menuview: 'views/MenuView',

		studentmodel: 'models/StudentModel',
		lecturemodel: 'models/LectureModel',
		singlepagemodel: 'models/SinglePageModel',
		menumodel: 'models/MenuModel',

		lecturecollection: 'collections/LectureCollection',
		singlepagecollection: 'collections/SinglePageCollection',
        studentcollection: 'collections/StudentCollection',
        menucollection: 'collections/MenuCollection'
    },

    shim: {

        handlebars: {
            exports: "Handlebars"
        },

		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		},

		underscore: {
			exports: "_"
		}
	}

});

require([

    'app',

], function(App){

    App.initialize();

});