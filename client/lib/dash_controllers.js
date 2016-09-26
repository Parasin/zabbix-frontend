var app = angular.module('zabbix_dash');
app.controller('dashCtrl', ['$rootScope', '$scope', '$location', '$resource', '$log', '$timeout', '$route', '$window', function ($rootScope, $scope, $location, $resource, $log, $timeout, $route, $window) {
    $scope.host_groups;
    $scope.triggers;
    $scope.error = {};
    var session_obj = {session_id: $rootScope.session};
    var triggers =  $resource('/triggers');
    var host_groups = $resource('/hostGroups');
    var requests = function () {
        /* Retrieve host groups, via HTTP POST call on page load */
        host_groups.save({}, session_obj).$promise.then(function (result) {
            if (result.result) {
                $scope.host_groups = result.result;
                _.sortBy($scope.host_groups, 'name');

                for (var i = 0; i < $scope.host_groups.length; i++) {
                    $scope.host_groups[i].triggers = [];
                    $scope.host_groups[i].max_priority = -1;
                }
                /* Retrieve triggers, via HTTP POST call on page load */
                triggers.save({}, session_obj).$promise.then(function (result) {
                    if (result.result) {
                        $scope.triggers = result.result;

                        for (var i = 0; i < $scope.triggers.length; i++) {
                            var trigger_group = $scope.triggers[i].groups[0].name;
                            for (var j = 0; j < $scope.host_groups.length; j++) {

                                if ($scope.host_groups[j].name === trigger_group) {
                                    $scope.host_groups[j].triggers.push($scope.triggers[i]);

                                    if ($scope.host_groups[j].max_priority < $scope.triggers[i].priority) {
                                        $scope.host_groups[j].max_priority = $scope.triggers[i].priority;
                                    }
                                    break;
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
    };
    requests();
}]);
