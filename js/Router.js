var Controller = Backbone.Router.extend({
	routes: {
		"": "start",
		"!/": "start",
		"!/students(/)": "studentList",
		"!/student/:section(/)": "studentItem",
		"!/lectures(/)": "lecturesList"
	},

	start: function (){
		
	},

	studentList: function (){
		var students = new StudentCollection( students_data.students );
		var studentsView = new StudentsView(  { model: students } );
		studentsView.render();
	},

	studentItem: function (id){
		var student = new StudentCollection( students_data.students );
		student = student.get(id);
		var studentView = new StudentView( { model: student } );
		studentView.render();
	},

	lecturesList: function (){
		var lectures = new LectureCollection( lectures_data.lectures );
		var lecturesView = new LecturesView(  { model: lectures } );
		lecturesView.render();
	}
});

var controller = new Controller();
Backbone.history.start();