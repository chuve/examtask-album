var StudentsView = Backbone.View.extend({

	el: $('#dynamic'),


	render: function(){
		var studentsListTemplate = $('#students-list').html();
		studentsListTemplate = Handlebars.compile(studentsListTemplate);
		this.$el.html(studentsListTemplate(this.model.toJSON()));
	},

	events: {
		"click div.students-list__item" : "detail"
	},

	detail: function (e) {
		console.log(controller);
		var student_id = $(e.currentTarget).attr('data-id');
		controller.navigate('/!/student/' + student_id, { trigger: 'true'} );
	},

});