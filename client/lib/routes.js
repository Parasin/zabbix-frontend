var app = angular.module('zabbix_dash');
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/html/login.html',
            controller: 'loginCtrl'
            , access: {
                restricted: false
            }
        })
        .when('/dashboard', {
            templateUrl: '/html/dashboard.html',
            controller: 'dashCtrl'
            , access: {
                restricted: true
            }
        })
        .otherwise({redirectTo: '/'})
}]);
