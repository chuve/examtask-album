define([
    'jquery',
    'underscore',
    'backbone',
    'localstorage',
    'lecturemodel'

], function($, _, Backbone, LocalStorage, LectureModel){

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