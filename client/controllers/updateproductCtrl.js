angular.module('saturday').controller('UpdateProductsCtrl',['$scope', '$meteor', '$stateParams', function ($scope, $meteor, $stateParams) {

    //$scope.product = Products.find({_id: id}).fetch();

    $scope.product = $meteor.object(Products, $stateParams.id);

    $scope.updateProduct = function(){
        var nameProduct = $scope.name;

        //Update Method

        $scope.name = '';
        $scope.message = 'success';
    }

}]);