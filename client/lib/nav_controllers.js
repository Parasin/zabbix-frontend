var app = angular.module('zabbix_dash');
app.controller('navController', ['$scope', '$location', 'authFactory', '$rootScope', function ($scope, $location, authFactory, $rootScope) {
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