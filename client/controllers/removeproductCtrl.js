angular.module('saturday').controller('RemoveProductsCtrl',['$scope', '$meteor', function ($scope, $meteor) {

$scope.removeProduct = function(){
    var nameProduct = $scope.name;
    //Call Remove Method
    Meteor.call('removeProductByName', nameProduct);

    $scope.name = '';
    $scope.message = 'success';
}

}]);