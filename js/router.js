define([
    'jquery',
    'underscore',
    'backbone',
    'localstorage',
    'singlepageview',
    'studentsview',
    'studentview',
    'lecturesview',
    'lectureview',
    'menumodel',
    'menuview',
    'studentcollection',
    'lecturecollection',
    'singlepagecollection',
    'data'
], function(
    $,
    _,
    Backbone,
    LocalStorage,
    SinglePageView,
    StudentsView,
    StudentView,
    LecturesView,
    LectureView,
    MenuModel,
    MenuView,
    StudentCollection,
    LectureCollection,
    SinglePageCollection,
    Data){

var Router = Backbone.Router.extend({
	routes: {
		"": "start",
		"!/": "start",
		"!/students(/)": "studentList",
		"!/student/:section(/)": "studentItem",
		"!/lectures(/)": "lecturesList",
		"!/lecture/:section/:section(/)": "lectureItem",
	},

	start: function (){
		var index_page = this.pages.get(0);
		var singlePageView = new SinglePageView( { model: index_page } );
		singlePageView.render();
	},

	studentList: function (){
		var studentsView = new StudentsView(  { model: this.students } );
		studentsView.render();
	},

	studentItem: function (id){
		var student = this.students.get(id);
		var studentView = new StudentView( { model: student } );
		studentView.render();
	},

	lecturesList: function (){
		var lecturesView = new LecturesView(  { model: this.lectures } );
		lecturesView.render();
	},

	lectureItem: function (lector_id, lecture_id){

        var lecture =  this.lectures.get(lector_id);

		lecture =  lecture.get('all_lectures');

		for (var i = 0; i < lecture.length; i++) {
				if(lecture[i].id == lecture_id){
					lecture = lecture[i];
				}
			}

		var lectureView = new LectureView(  { model: lecture } );
		lectureView.render();
	},

	initialize: function(){

        var collectionLocalStorage = function(collection,data){

            var constructor = new collection();

            if(!localStorage[constructor.name]){
                 constructor = new collection(data);
                console.log('well done');
            }else{
            constructor.fetch();
            }
            constructor.save();

            return constructor;

        }

        this.students =  collectionLocalStorage(StudentCollection, Data.students);
        this.pages =  collectionLocalStorage(SinglePageCollection, Data.pages);
        this.lectures =  collectionLocalStorage(LectureCollection, Data.lectors);

        var menu = new MenuModel();
		var menuView = new MenuView( { model: menu} );
		menuView.render();

	}

});

	return Router;

});