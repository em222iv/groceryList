describe('Lists', function () {
    beforeEach(function (done) {
        FlowRouter.go('/lists');
        Tracker.afterFlush(done);
    });

    it("No Lists should be avaible when not logged in", function(){
        expect(Lists.find().count()).toBe(0);
    });

    it("Lists should be avaible when logged in", function(){
        Meteor.loginWithPassword("erik@gmail.com", "password", function (err) {
            expect(Lists.find().count()).toBeGreaterThan(0);
        });
    });
});