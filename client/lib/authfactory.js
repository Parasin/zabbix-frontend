var app = angular.module('zabbix_dash');

app.factory('authFactory', ['$q', '$timeout', '$http', '$cookies', function ($q, $timeout, $http, $cookies) {
    var user = false;
    var factory = {};
    var userData = {};

    factory.isLoggedIn = function () {
        return !!user;
    };

    factory.getUserStatus = function () {
        return user;
    };

    factory.login = function (username, password) {
        var deferred = $q.defer();
        var data = {
            username: username
            , password: password
        };
        $http.post('/login', data)
            .then(function (data) {
                if (data.status === 200) {
                    user = true;
                    if ($cookies.get('session_id')) {
                        $cookies.remove('session_id');
                    }
                    $cookies.put('session_id', data.session_id);
                    userData = data;
                    deferred.resolve(data.data);
                } else {
                    user = false;
                    userData = {};
                    deferred.reject(data);
                }
            }, function (err) {
                user = false;
                deferred.reject(err);
            });
        return deferred.promise;
    };

    factory.logout = function (session_id) {
        var deferred = $q.defer();
        var session_id = session_id;
        $http.post('/logout', session_id)
            .then(function (data) {
                $cookies.remove('session_id');
                user = false;
                userData = {};
                deferred.resolve(data.data);
            }, function (err) {
                user = false;
                userData = {};
                deferred.reject(err);
            });
        return deferred.promise;
    };
    return factory;
}]);