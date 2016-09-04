'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('RootController', ['$scope','$http','$state', function($scope, $http, $state){
    // stmt
}]);

controllers.controller('UserController', ['$scope','$http','$state', function($scope, $http, $state){
    $scope.users = [];

    $scope.getAllUsers = function(){
        $http.get('/api/v1/user/all')
            .success(function(result){
                if(result.success){
                    $scope.users = result.data;
                } else {
                    $scope.users = [];
                }
            })
            .error(function(err){
                console.log(err);
            });
    };

    $scope.getAllUsers();

    $scope.addUser = function(){
        $http.post('/api/v1/user/add', $scope.newUser)
            .success(function(result){
                if(result.success){
                    $state.go('users');
                }

            })
            .error(function(err){
                console.log(err);
            });
    }
}]);


controllers.controller('CourseController', ['$scope','$http','$state', function($scope, $http, $state){
    $scope.courses = [];
    $scope.newCourse = {};

    $scope.getAllCourses = function(){
        $http.get('/api/v1/course/all')
            .success(function(result){
                if(result.success){
                    $scope.courses = result.data;
                } else {
                    $scope.courses = [];
                }
            })
            .error(function(err){
                console.log(err);
            });
    };

    $scope.getAllCourses();

    $scope.addCourse = function(){
        $http.post('/api/v1/course/add', $scope.newCourse)
            .success(function(result){
                if(result.success){
                    $state.go('courses');
                }
            })
            .error(function(err){
                console.log(err);
            });
    };
}]);