describe('Lists', function () {
    beforeEach(function (done) {
        FlowRouter.go('/lists');
        Tracker.afterFlush(done);
    });

    it("Lists in listview", function(){
        expect(Lists.find().count()).toBeGreaterThan(0);
    });
});