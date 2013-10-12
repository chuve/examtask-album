define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function($, _, Backbone){

var StudentsView = Backbone.View.extend({

	el: $('#dynamic'),


	render: function(){
		var studentsListTemplate = JST['templates/students-list.handlebars'];
		this.$el.html(studentsListTemplate(this.model.toJSON()));
	},

	events: {
		"click div.students-list__item" : "detail"
	},

});

	return StudentsView;

});