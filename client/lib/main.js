var app = angular.module('zabbix_dash', ['ngRoute', 'ngResource', 'ngMaterial', 'ngAnimate', 'ngCookies', 'ngMessages']);

app.factory('_', ['$window', function ($window) {
    return $window._;
}]);

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

app.controller('dashCtrl', ['$rootScope', '$scope', '$location', '$resource', '$log', function ($rootScope, $scope, $location, $resource, $log) {
    $scope.host_groups;
    $scope.triggers;
    $scope.error = {};
    var session_obj = {session_id: $rootScope.session};
    var host_group_names = [];
    var triggers =  $resource('/triggers');
    var host_groups = $resource('/hostGroups');

    /* Retrieve host groups, via HTTP POST call on page load */
    host_groups.save({}, session_obj).$promise.then(function (result) {
        if (result.result) {
            $scope.host_groups = result.result;
            _.sortBy($scope.host_groups, 'name');

            /* Retrieve triggers, via HTTP POST call on page load */
            triggers.save({}, session_obj).$promise.then(function (result) {
                if (result.result) {
                    $scope.triggers = result.result;

                    for (var i = 0; i < $scope.triggers.length; i++) {
                        var trigger_group = $scope.triggers[i].groups[0].name;
                        for (var j = 0; j < $scope.host_groups.length; j++) {
                            if ($scope.host_groups[j].name === trigger_group) {
                                $scope.host_groups[j].triggers = $scope.triggers[i];
                            }
                        }
                    }
                }
            }, function (err) {
                $scope.error.trigger_error = err.error;
                $log.error(JSON.stringify(err));
            });
        }
    }, function (err) {
        $scope.error.host_group_err = err.error;
    });


}]);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default');
});