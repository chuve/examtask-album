var LecturesView = Backbone.View.extend({

	el: $('#dynamic'),

	render: function(){
		var lectureListTemplate = JST['templates/lectures-list.handlebars'];
		this.$el.html(lectureListTemplate(this.model.toJSON()));
	}

});