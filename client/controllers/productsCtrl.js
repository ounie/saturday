angular.module('saturday').controller('ProductsCtrl',['$scope', '$meteor', function ($scope, $meteor) {

    //$scope.products = Products;

   $scope.products = $meteor.collection(function (){
        return Products.find ()
    });

   // $scope.products = Products.find().fetch();

   //console.log($scope.products);

    $scope.remove = function(id){
        Products.remove(id);
    }

}]);