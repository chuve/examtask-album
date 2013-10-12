define([
    'jquery',
    'underscore',
    'backbone',
    'studentmodel'

], function($, _, Backbone){

var StudentCollection = Backbone.Collection.extend({

	model: StudentModel

});

	return StudentCollection;

});