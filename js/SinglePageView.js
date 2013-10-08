var SinglePageView = Backbone.View.extend({

	el: $('#dynamic'),

	render: function(){
		var singlePageTemplate = $('#single-page').html();
		singlePageTemplate = Handlebars.compile(singlePageTemplate);
		this.$el.html(singlePageTemplate(this.model.toJSON()));
	}

});