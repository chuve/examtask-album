define([
    'jquery',
    'underscore',
    'backbone',
    'lecturemodel'

], function($, _, Backbone){

var LectureCollection = Backbone.Collection.extend({

	model: LectureModel

});

	return LectureCollection;

});