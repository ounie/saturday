angular.module('saturday').controller('ProductsCtrl',['$scope', '$meteor', function ($scope, $meteor) {

    //$scope.products = Products;

    var userId = Meteor.userId();

   $scope.products = $meteor.collection(function (){
        return Products.find ()
    });

   /*$scope.products = Products.find().fetch();*/

   //console.log($scope.products);

    $scope.remove = function(id){
        Products.remove(id);
    }

    Tracker.autorun(function(){
        var userId = Meteor.userId();

        if(userId){
            $scope.userLogin = true;
        }
        else
        {
            $scope.userLogin = false;
        }

    })

}]);