define([
    'jquery',
    'underscore',
    'backbone',
    'lecturemodel'

], function($, _, Backbone, LectureModel){

var LectureCollection = Backbone.Collection.extend({

    name: 'LectureCollection',

	model: LectureModel,

    localStorage: new Backbone.LocalStorage("LectureCollection"),

    save: function(){
        this.each(function(e){
            e.save();
        });
    }

});

	return LectureCollection;

});