'use strict';

var dependencies = [
    'ui.router',
    'controllers'
];

var myApp = angular.module('myApp', dependencies);

myApp.config(['$stateProvider','$urlRouterProvider','$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('/', {
            url: '/',
            controller: 'RootController'
        })

        .state('users', {
            url: '/view/user',
            templateUrl: '/view/user',
            controller: 'UserController'
        })

        .state('addUser', {
            url: '/add/user',
            templateUrl: '/add/user',
            controller: 'UserController'
        })

        .state('courses', {
            url: '/view/course',
            templateUrl: '/view/course',
            controller: 'CourseController'
        })

        .state('addCourse', {
            url: '/add/course',
            templateUrl: '/add/course',
            controller: 'CourseController'
        })
}]);