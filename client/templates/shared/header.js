Template.header.onRendered(function () {
    Tracker.autorun(function(){
        if(Meteor.user()){
            $(".arcmenu").arcmenu({
                iconRotation:0
            });
        }
    });
});

Template.header.helpers({
    lists: function(){
        return Lists.find();
    }
});

Template.header.events({
    "click #logout": function (event) {
        AccountsTemplates.logout();
    }
});