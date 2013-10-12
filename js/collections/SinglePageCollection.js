define([
    'jquery',
    'underscore',
    'backbone',
    'singlepagemodel'

], function($, _, Backbone, SinglePageModel){

var SinglePageCollection = Backbone.Collection.extend({

    name: 'SinglePageCollection',

    model: SinglePageModel,

    localStorage: new Backbone.LocalStorage("SinglePageCollection"),

    save: function(){
        this.each(function(e){
            e.save();
        });
    }

});

	return SinglePageCollection;

});