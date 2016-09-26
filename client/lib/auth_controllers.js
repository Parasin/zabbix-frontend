var app = angular.module('zabbix_dash');
app.controller('loginCtrl', ['$resource', '$log', '$location', '$rootScope', '$scope', 'authFactory', '$timeout', '$window', function ($resource, $log, $location, $rootScope, $scope, authFactory, $timeout, $window) {
    $scope.user = {};
    $scope.error;
    $scope.message;
    $scope.login = function() {
        authFactory.login($scope.user.username, $scope.user.password)
            .then(function (res) {
                $rootScope.session = res.session_id;
                $scope.error = null;
                $scope.message = 'Logged in, redirecting!';
                $timeout(function () { $location.path('/dashboard') }, 1000);
            }, function (err) {
                $scope.error = err.error;
                $rootScope.session = null;
            });
    };
}]);
