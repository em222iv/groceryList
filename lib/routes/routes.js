FlowRouter.route('/', {
    action: function (params, queryParams) {
        BlazeLayout.render('layout', { header: 'header', main: 'home', footer:"footer" });
    },
    name: 'home'
});

FlowRouter.route('/about', {
    action: function (params, queryParams) {
        BlazeLayout.render('layout', { header: 'header', main: 'about', footer:"footer" });
    },
    name: 'about'
});

FlowRouter.route('/lists', {
    subscriptions: function (params, queryParams) {
        if(Meteor.user()){
            this.register('lists',  Meteor.subscribe('lists'));
        }
    },
    action: function (params, queryParams) {
        BlazeLayout.render('layout', { header: 'header', main: 'lists', footer:"footer" });
    },
    name: 'lists'
});

FlowRouter.route('/login', {
    action: function (params, queryParams) {
        BlazeLayout.render('layout', { header: 'header', main: 'login', footer:"footer" });
    },
    name: 'login'
});
