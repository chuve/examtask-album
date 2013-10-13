define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function($, _, Backbone, Router){

    var initialize = function(){

        var controller = new Router();

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
