define([
    'jquery',
    'underscore',
    'backbone',
    'localstorage',
    'singlepagemodel'

], function($, _, Backbone, LocalStorage, SinglePageModel){

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