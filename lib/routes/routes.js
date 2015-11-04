

FlowRouter.route('/', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function (params, queryParams) {
        BlazeLayout.render('layout', { header: 'header', main: 'home', footer:"footer" });
    },
    name: 'home'
});
FlowRouter.route('/about', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function (params, queryParams) {
        BlazeLayout.render('layout', { header: 'header', main: 'about', footer:"footer" });
    },
    name: 'about'
});
