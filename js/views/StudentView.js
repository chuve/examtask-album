define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function($, _, Backbone){

var StudentView = Backbone.View.extend({

	el: $('#dynamic'),

	render: function(){
		var studentItemTemplate = JST['templates/students-item.handlebars'];
		this.$el.html(studentItemTemplate(this.model.toJSON()));
	}


});

	return StudentView;

});