var app = angular.module("myApp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/clinton', {
            templateUrl: 'views/clinton.html',
            controller: 'ClintonController'
        })
        .when('/sanders', {
            templateUrl: 'views/sanders.html',
            controller: 'SandersController'
        })
        .when('/omalley', {
            templateUrl: 'views/omalley.html',
            controller: 'OmalleyController'
        });
}]);

app.controller('mainController', ['$scope', 'SecretService', function($scope, SecretService){
    $scope.data = SecretService.data;
    $scope.click = SecretService.click;
}]);

app.controller('ClintonController', ['$scope', function($scope){}]);
app.controller('SandersController', ['$scope', function($scope){}]);
app.controller('OmalleyController', ['$scope', function($scope){}]);

app.factory('SecretService', function(){
    data = {click: 0};

    var click = function(){
        data.click++;
    };

    return {
        click: click,
        data: data
    }
});