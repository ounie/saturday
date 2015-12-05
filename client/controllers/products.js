angular.module('saturday').controller('ProductsCtrl',function ($scope) {

    $scope.product = 'Apple iPhone 2';

    $scope.price = function(){
        return 199;
    }

});