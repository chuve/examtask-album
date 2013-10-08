var Controller = Backbone.Router.extend({
	routes: {
		"": "start",
		"!/": "start",
		"!/students(/)": "studentList",
		"!/student/:section(/)": "studentItem",
		"!/lectures(/)": "lecturesList",
		"!/lecture/:section/:section(/)": "lectureItem",
	},

	start: function (){
		var index_page = pages.get(0);
		var singlePageView = new SinglePageView( { model: index_page } );
		singlePageView.render();
	},

	studentList: function (){
		var studentsView = new StudentsView(  { model: students } );
		studentsView.render();
	},

	studentItem: function (id){
		var student = students.get(id);
		var studentView = new StudentView( { model: student } );
		studentView.render();
	},

	lecturesList: function (){
		var lecturesView = new LecturesView(  { model: lectures } );
		lecturesView.render();
	},

	lectureItem: function (lector_id, lecture_id){
		var lecture_id = lecture_id,
		lecture = lectures.get(lector_id);

		lecture = lecture.get('all_lectures');

		for (var i = 0; i < lecture.length; i++) {
				if(lecture[i].id == lecture_id){
					lecture = lecture[i];
				}
			}

		var lectureView = new LectureView(  { model: lecture } );
		lectureView.render();
	}
});

var controller = new Controller();
var pages = new SinglePageCollection( pages_data.pages )
var students = new StudentCollection( students_data.students );
var lectures = new LectureCollection( lectors_data.lectors );

Backbone.history.start();