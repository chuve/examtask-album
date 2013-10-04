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
	},

	studentItem: function (id){
		console.log(id);
	},

	lecturesList: function (){
	}
});

var controller = new Controller();
Backbone.history.start();