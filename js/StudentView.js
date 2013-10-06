var StudentView = Backbone.View.extend({

	el: $('#dynamic'),

	render: function(){
		var studentItemTemplate = $('#student-item').html();
		studentItemTemplate = Handlebars.compile(studentItemTemplate);
		this.$el.html(studentItemTemplate(this.model.toJSON()));
	}

});