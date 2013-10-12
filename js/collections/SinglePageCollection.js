define([
    'jquery',
    'underscore',
    'backbone',
    'singlepagemodel'

], function($, _, Backbone){

var SinglePageCollection = Backbone.Collection.extend({

	model: SinglePageModel

});

	return SinglePageCollection;

});