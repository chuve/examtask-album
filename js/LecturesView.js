var LecturesView = Backbone.View.extend({

	el: $('#dynamic'),

	render: function(){
		var lectureListTemplate = $('#lectures-list').html();
		lectureListTemplate = Handlebars.compile(lectureListTemplate);
		this.$el.html(lectureListTemplate(this.model.toJSON()));
	}

});