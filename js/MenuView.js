var MenuView = Backbone.View.extend({

    el: $('#menu'),

    template: JST['templates/sidebar-menu.handlebars'],

    render: function(){
        $(this.el).html(this.template(this.model.toJSON()));
    }


});