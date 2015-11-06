
FlowRouter.route('/', {
    subscriptions: function(params) {
        this.register('lists', Meteor.subscribe('lists'));
    },
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
