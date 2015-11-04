// ***************************************************************
// STARTUP (Will run as soon as the server process is finished starting)
// ***************************************************************

Meteor.startup(function () {
    //snippet for emptying collection, for testing purposes
    //var globalObject=Meteor.isClient?window:global;
    //for(var property in globalObject){
    //    var object=globalObject[property];
    //    if(object instanceof Meteor.Collection){
    //        object.remove({});
    //    }
    //}
});
