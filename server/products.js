Meteor.publish("products", function () {
    return Products.find();
});

Meteor.methods({
    removeProductByName: function(name){
        Products.remove({name: name});
    }
});