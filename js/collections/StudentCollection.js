define([
    'jquery',
    'underscore',
    'backbone',
    'localstorage',
    'studentmodel'

], function($, _, Backbone, localStorage, StudentModel){

var StudentCollection = Backbone.Collection.extend({

    name: 'StudentCollection',

	model: StudentModel,

    localStorage: new Backbone.LocalStorage("StudentCollection"),

    save: function(){
        this.each(function(e){
            e.save();
        });
    }

});

	return StudentCollection;

});