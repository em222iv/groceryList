Template.lists.rendered = function() {};

Template.lists.helpers({
    lists: function(){
        return Lists.find();
    }
});
