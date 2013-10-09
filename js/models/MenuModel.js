var MenuModel = Backbone.Model.extend({
    defaults: {
        items:[
            {
                id: 1,
                name: 'О школе',
                color: 'red',
                url: '',
                count: ''
            },
            {
                id: 2,
                name: 'Студенты',
                color: 'blue',
                url: 'students',
                count: 10
            },
            {
                id: 3,
                name: 'Лекции',
                color: 'yellow',
                url: 'lectures',
                count: 16
            },
            {
                id: 4,
                name: 'Задания',
                color: 'grey',
                url: 'tasks',
                count: 10
            }
        ]
    }
});