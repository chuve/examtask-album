var SinglePageView = Backbone.View.extend({

	el: $('#dynamic'),

	render: function(){
		var singlePageTemplate = JST['templates/single-page.handlebars'];
		this.$el.html(singlePageTemplate(this.model.toJSON()));
	}

});