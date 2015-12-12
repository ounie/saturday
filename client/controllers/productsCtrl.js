angular.module('saturday').controller('ProductsCtrl',['$scope', '$meteor', function ($scope, $meteor) {

    //$scope.products = Products.subscribe('products');

    $scope.products = $meteor.collection(function (){
        return Products.find ()
    }).subscribe('products');

   // console.log($scope.products);

}]);