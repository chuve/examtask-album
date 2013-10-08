var LectureView = Backbone.View.extend({

	el: $('#dynamic'),

	render: function(){
		var lectureItemTemplate = JST['templates/lectures-item.handlebars'];
		this.$el.html(lectureItemTemplate(this.model));
	}

});