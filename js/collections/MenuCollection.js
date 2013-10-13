define([
    'jquery',
    'underscore',
    'backbone',
    'localstorage',
    'menumodel'

], function($, _, Backbone, localStorage, MenuModel){

var MenuCollection = Backbone.Collection.extend({

    name: 'MenuCollection',

    model: MenuModel,

    localStorage: new Backbone.LocalStorage("MenuCollection"),

    save: function(){
        this.each(function(e){
            e.save();
        });
    }

});

	return MenuCollection;

});