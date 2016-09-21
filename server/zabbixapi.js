var request = require('request');
var Promise = require('es6-promise').Promise;
var url = 'http://138.85.123.203/zabbix/api_jsonrpc.php';

module.exports = function (req) {
    return new Promise(function (resolve, reject) {
        request({
            url: url
            , port: 80
            , body: req
            , json: true
            , method: 'POST'
            , headers: {
                'content-type': 'application/json-rpc'
            }
        }, function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
};