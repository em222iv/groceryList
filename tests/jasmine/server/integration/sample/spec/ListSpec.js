describe('Server: Collection: Lists', function () {

  it('some lists are available in the collection', function () {
    expect(Lists.find().count()).toBeGreaterThan(0);
  });

});