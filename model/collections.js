Products = new Mongo.Collection("products");

Products.allow({
    insert: function () {
        return true;
    }
});