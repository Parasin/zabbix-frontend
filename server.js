/**
 * Created by eevabec on 9/12/2016.
 */
const PORT = process.env.PORT || 3000;
var express = require('express');
//var db = require('./server/db.js');
var path = require('path');
var bodyParser = require('body-parser');
var _ = require('underscore');
var extend = require('extend');
var methods   = require(__dirname + '/server/methods.js');
var zabbixApi = require(__dirname + '/server/zabbixapi.js');
//var middleware = require(__dirname + '/server/middleware.js')(db);
var app = express();

app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json());
//require(__dirname + '/server/routes.js')(app, _, middleware, db, bodyParser);

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
});


app.post('/login', function (req, res) {
    var body = _.pick(req.body, 'username', 'password');
    var SESSIONID, APIVERSION;
    console.log('login request');
    zabbixApi(methods.getApiVersion())
        .then(function (version) {
            APIVERSION = version;
            // Verify that the API version returned is correct
            if (version.error) {
                console.log('Error occurred retrieving API version: ' + version.error.data);
                res.status(500).send();
            } else {
                return zabbixApi(methods.login(body.username, body.password));
            }
        }, function (error) {
            console.log('Error occurred retrieving API version: ' + error);
            res.status(500).send();
        }).then(function (auth) {
            SESSIONID = auth.result;
            if (!SESSIONID) {
                res.status(404).send({error: auth.error.data});
            } else {
                /* Authentication successful, return session id */
                var obj = {session_id: SESSIONID};
                res.json(obj);
            }
        }, function (err) {
            console.log('Error occurred authenticating: ' + error);
            res.status(500).send(err);
     });
});

app.post('/logout', function (req, res) {
    var body = _.pick(req.body, 'session_id');
    zabbixApi(methods.logout(body.session_id))
        .then(function (result) {
            res.send(result);
        }, function (err) {
            res.status(404).send(err);
        });
});

app.post('/hosts', function (req, res) {
    var body = _.pick(req.body, 'session_id');

    zabbixApi(methods.getHosts(body.session_id))
        .then(function (hosts) {
            res.json(hosts);
        }, function (err) {
            res.status(500).send(err);
        });
});


app.post('/history/host', function (req, res) {
    var body = _.pick(req.body, 'session_id', 'hostid', 'name');
    //res.send(query);

    zabbixApi(methods.getHistoryByHost(body.session_id, body.hostid))
        .then(function (items) {
            res.send(items);
        }, function (err) {
            res.status(500).send(err);
        });
});

app.post('/history/host/item', function (req, res) {
    var body = _.pick(req.body, 'session_id', 'hostid', 'itemid');
    //res.send(query);

    zabbixApi(methods.getHistoryByItem(body.session_id, body.itemid))
        .then(function (items) {
            res.send(items);
        }, function (err) {
            res.status(500).send(err);
        });
});

app.post('/hostGroups', function (req, res) {
    console.log('Host group request');
    var body = _.pick(req.body, 'session_id');
    /*zabbixApi(methods.getHostGroups(body.session_id))
        .then(function (groups) {
            res.send(groups);
        }, function (err) {
            res.status(400).send(err);
        });*/
    res.sendFile('/server/host_group_output.txt', {root: __dirname});
});

app.post('/triggers', function (req, res) {
    console.log('Trigger request');
    /*var body = _.pick(req.body, 'session_id');
     zabbixApi(methods.getAllActiveTriggers(body.session_id))
        .then(function (triggers) {
            res.send(triggers);
        }, function (err) {
            res.status(404).send(err);
        });*/
    res.sendFile('/server/trigger_output.txt', {root: __dirname});
});

app.listen(PORT, function () {
    console.log('Express listening on port: ' + PORT);
/*    db.sequelize.sync().then(function () {

    });*/
});