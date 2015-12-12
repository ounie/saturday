angular.module('saturday').controller('AddProductsCtrl',['$scope', '$meteor', function ($scope, $meteor) {

$scope.addProduct = function(){
    var nameProduct = $scope.name;
    Products.insert({name: nameProduct});
    $scope.name = '';
    $scope.message = 'success';
}

}]);