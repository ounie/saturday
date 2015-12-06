angular.module('saturday').controller('ProductsCtrl',function ($scope) {

    $scope.product = 'Apple iPhone 2';
    $scope.totalCost = 999;

    $scope.price = function(product){
        if (product === 'iPhone'){
            return 199;
        }
        else if (product === 'iPod'){
            return 79;
        }
        else
        {
            return 29;
        }
    }

    var product1 = {
        name: 'iPhone',
        price: 299,
        description: 'Best phone ever',
        photo: 'images/iphone.jpg',
        inStock: false
    };

    var product2 = {
        name: 'iPod',
        price: 79,
        description: 'Music to my ears',
        photo: 'images/ipod.jpg',
        inStock: true
    };

    var product3 = {
        name: 'iWatch',
        price: 49,
        description: 'Clock on my wrist',
        photo: 'images/iwatch.jpg',
        inStock: true
    };

    $scope.products = [product1, product2, product3];

});