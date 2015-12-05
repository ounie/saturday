angular.module('saturday').config(function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'client/views/main.ng.html'
        });

    $urlRouterProvider.otherwise("/");
});