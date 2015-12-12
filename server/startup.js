Meteor.startup(function () {
    //Sample insert into a collection
    //Products.remove({});

    if (Products.find().count() === 0) {
        Products.insert({
                name: 'iPhone',
                price: 299,
                description: 'Best phone ever',
                photo: 'images/iphone.jpg',
                inStock: false
            }  );

        Products.insert({
                name: 'iPod',
                price: 79,
                description: 'Music to my ears',
                photo: 'images/ipod.jpg',
                inStock: true,
                options: ['red', 'blue']
            });

        Products.insert({
                name: 'iWatch',
                price: 49,
                description: 'Clock on my wrist',
                photo: 'images/iwatch.jpg',
                inStock: true
            });
    }
});