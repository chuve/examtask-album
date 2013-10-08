var LectureView = Backbone.View.extend({

	el: $('#dynamic'),

	render: function(){
		var lectureItemTemplate = $('#lectures-item').html();
		lectureItemTemplate = Handlebars.compile(lectureItemTemplate);
		this.$el.html(lectureItemTemplate(this.model));
	}

});