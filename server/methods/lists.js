Meteor.methods({
    insertList:function(listName) {
        // Insert a list into the collection
        //console.log(Meteor.user().profile[0][Math.floor(Math.random()*Meteor.user().profile[0].length)]);
        Lists.insert({
            title: listName,
            author: Meteor.user().emails[0].address,
            createdAt: new Date()
            //color: Meteor.user().profile[0].colors[Math.floor((Meteor.user().profile[0].colors.length + 1) * Math.random())],
        });
    },
    removeList:function(id) {
        Lists.remove(id);
    }
});