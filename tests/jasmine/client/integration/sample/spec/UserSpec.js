describe('User', function () {

    beforeEach(function (done) {
        Tracker.afterFlush(done);
    });

    it("logged in user", function() {
        Meteor.loginWithPassword("erik@gmail.com", "password", function (err) {
            expect(Meteor.userId()).not.toBeNull();
        });
    });

    it("not logged in", function() {
        expect(Meteor.userId()).toBeNull()
    });

});