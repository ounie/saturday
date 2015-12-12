angular.module('saturday').config(function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'client/views/main.ng.html',
            resolve: {
                'subscribe': [
                    '$meteor', function($meteor) {
                        return $meteor.subscribe('products');
                    }
                ]
            }
        })
        .state('add', {
            url: '/add',
            templateUrl: 'client/views/addproducts.ng.html',
            controller: 'AddProductsCtrl',
            resolve: {
                'subscribe': [
                    '$meteor', function($meteor) {
                        return $meteor.subscribe('products');
                    }
                ]
            }
        })
        .state('update', {
            url: '/update/:id',
            templateUrl: 'client/views/updateproducts.ng.html',
            controller: 'UpdateProductsCtrl',
            resolve: {
                'subscribe': [
                    '$meteor', function($meteor) {
                        return $meteor.subscribe('products');
                    }
                ]
            }
        })
        .state('remove', {
            url: '/remove',
            templateUrl: 'client/views/removeproducts.ng.html',
            controller: 'RemoveProductsCtrl',
            resolve: {
                'subscribe': [
                    '$meteor', function($meteor) {
                        return $meteor.subscribe('products');
                    }
                ]
            }
        })
    ;

    $urlRouterProvider.otherwise("/");
});