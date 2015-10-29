/**
 * Created by Guillaume on 10/09/2015.
 */
var app = angular.module("myApp",['ngResource','ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .when('/search', {
            controller: 'SearchController',
            templateUrl: 'views/search.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});