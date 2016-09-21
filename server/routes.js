/**
 * Created by eevabec on 9/14/2016.
 */
module.exports = function(app, _, middleware, db) {
    app.post('/users', function (req, res) {
        var user_id = req.body.id;
        var where = {
            userid: user_id
        }
        var attributes = ['userid', 'alias', 'name', 'surname'];
        db.users.findAll({attributes: attributes, where: where}).then(function (user) {
            res.send(user);
        }, function (err) {
           res.status(404).send();
        });
    });

    app.get('/hosts', function (req, res) {
        var attributes = ['hostid', 'proxy_hostid', 'host', 'status', 'available', 'name', 'description'];
        db.hosts.findAll({attributes: attributes}).then(function (hosts) {
           res.send(hosts);
        });
    });

    //noinspection JSUnresolvedFunction
    app.post('/hosts', function (req, res) {
        var body = _.pick(req.body, 'hostid', 'proxy_hostid', 'host', 'status', 'available', 'name');
        var attributes = ['hostid', 'proxy_hostid', 'host', 'status', 'available', 'name', 'description'];
        db.hosts.findall({attributes: attributes, where: where}).then(function (hosts) {

        });
    });
};