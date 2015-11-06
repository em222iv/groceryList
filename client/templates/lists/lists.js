Template.lists.rendered = function() {};

Template.lists.helpers({
    lists: function(){
        return Lists.find({},{sort: {createdAt: -1}});
    }
});
Template.lists.events({
    'click #addList': function (event) {

        console.log($("#listInput").val());
        Meteor.call("insertList", $("#listInput").val());
        //$("#listInput").val('');
    },
    "click #removeList": function (event) {
        // Prevent default browser form submit
        event.preventDefault();
        Meteor.call("removeList", this._id);
    },
});
AccountsTemplates.addField({
    _id: "username",
    type: "text",
    displayName: "username",
    required: true,
    minLength: 5,
});

