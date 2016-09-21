var app = angular.module('zabbix_dash', ['ngRoute', 'ngResource', 'ngMaterial', 'ngAnimate', 'ngCookies', 'ngMessages']);

app.controller('navController', ['$scope', '$location', 'authFactory', '$rootScope', '$timeout', function ($scope, $location, authFactory, $rootScope, $timeout) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    $scope.logout = function () {
        authFactory.logout({session_id: $rootScope.session})
            .then(function (data) {
                if (data.result) {
                    $rootScope.session =  null;
                    $location.path('/');
                }
            }, function (err) {
                console.log('Error logging out: ' + JSON.stringify(err));
            });
    };
}]);

app.controller('loginCtrl', ['$resource', '$log', '$location', '$rootScope', '$scope', 'authFactory', '$timeout', function ($resource, $log, $location, $rootScope, $scope, authFactory, $timeout) {
    $scope.user = {};
    $scope.error;
    $scope.message;
    $scope.login = function() {
        authFactory.login($scope.user.username, $scope.user.password)
            .then(function (res) {
                $rootScope.session = res.session_id;
                $scope.error = null;
                $scope.message = 'Logged in, redirecting!';
                $timeout(function () { $location.path('/dashboard') }, 2000);
            }, function (err) {
                $scope.error = err.error;
                $rootScope.session = null;
            });
    };
}]);

app.controller('dashCtrl', ['$scope', '$location', /*'authFactory', */function ($scope, $location) {

}]);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange');
});