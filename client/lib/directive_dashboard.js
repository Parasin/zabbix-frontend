var app = angular.module('zabbix_dash');
app.directive('dash-card', function () {
    return {
        restrict: 'AE',
        transclude: true,
        scope: {group: '@group'},
        replace: 'true',
        templateUrl: '../html/directive_dashboard_template.html'
    };
});
