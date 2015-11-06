describe('User', function () {
    var fakeUser;
    beforeEach(function (done) {
        fakeUser = {
            _id: '123',
            // Other properties...
        };
        spyOn(Meteor, 'user').and.returnValue(fakeUser);
        Tracker.afterFlush(done);
    });

    it("logged in user", function(){
        expect(Meteor.user()._id).not.toBeNull();
    });

});