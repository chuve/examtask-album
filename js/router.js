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
    'menucollection',
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
    MenuCollection,
    Data){

var Router = Backbone.Router.extend({
	routes: {
		"": "start",
		"!/": "start",
		"!/students(/)": "studentList",
		"!/student/:section(/)": "studentItem",
		"!/lectures(/)": "lecturesList",
		"!/lectures/:section(/)": "lectureItem"
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

	lectureItem: function (id){

        var lecture =  this.lectures.get(id);
		var lectureView = new LectureView(  { model: lecture } );
		lectureView.render();
	},

	initialize: function(){

        var collectionLocalStorage = function(collection,data){

            var constructor = new collection();

            if(!localStorage[constructor.name]){
                constructor = new collection(data);
            }else{
                constructor.fetch();
            }

            constructor.save();

            return constructor;

        }

        this.students =  collectionLocalStorage(StudentCollection, Data.students);
        this.pages =  collectionLocalStorage(SinglePageCollection, Data.pages);
        this.lectures =  collectionLocalStorage(LectureCollection, Data.lectures);
        this.menu =  collectionLocalStorage(MenuCollection, Data.menu);

		var menuView = new MenuView( { model: this.menu } );
        menuView.updateCount(this.menu.get(2) , this.students.length);
        menuView.updateCount(this.menu.get(3) , this.lectures.length);
		menuView.render();

    }

});

	return Router;

});