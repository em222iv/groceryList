describe('Collection: Lists', function () {

    it('some lists are available on the client', function () {
        expect(Lists.find().count()).toBeGreaterThan(0);
    });

    it('some lists are available on the client1', function () {
        expect(Lists.find().count()).toBeGreaterThan(0);
    });
});
