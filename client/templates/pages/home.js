Template.home.events({
});
Template.home.helpers({
    lists: function(){
        return Lists.find({},{sort: {createdAt: -1}});
    }
});