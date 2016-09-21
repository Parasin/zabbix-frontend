/**
 * Created by eevabec on 9/12/2016.
 */
process.env.NODE_ENV = 'production';
process.env.DATABASE_URL = 'zabbix';
var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';

if (env) {
    //sequelize = new Sequelize('postgres://zabbix:zabbix@138.85.123.204:5432/zabbix');
    sequelize = new Sequelize(process.env.DATABASE_URL, 'zabbix', 'zabbix', {
        host: '138.85.123.204'
        , dialect: 'postgres'
    });
    //noinspection JSUnresolvedFunction
    sequelize.authenticate().then(function () {
        console.log('Connected to Zabbix Database');
    }).catch(function (err) {
        console.log('Unable to connect to Zabbix Database:', err);
    });
} else {
    sequelize = new Sequelize(undefined, undefined, undefined, {
        dialect: 'sqlite'
        , storage: __dirname + '/data/dev-zabbix.sqlite'
    });
}

var db = {};

/* Models */
db.users = sequelize.import(__dirname + '/models/users.js');
db.alerts = sequelize.import(__dirname + '/models/alerts.js');
db.applications = sequelize.import(__dirname + '/models/applications.js');
db.events = sequelize.import(__dirname + '/models/events.js');
db.history = sequelize.import(__dirname + '/models/history.js');
db.history_log = sequelize.import(__dirname + '/models/history_log.js');
db.history_str = sequelize.import(__dirname + '/models/history_str.js');
db.history_txt = sequelize.import(__dirname + '/models/history_text.js');
db.history_uint = sequelize.import(__dirname + '/models/history_uint.js');
db.hosts = sequelize.import(__dirname + '/models/hosts.js');
db.hosts_groups = sequelize.import(__dirname + '/models/hosts_groups.js');
db.hosts_templates = sequelize.import(__dirname + '/models/hosts_templates.js');
db.httpstep = sequelize.import(__dirname + '/models/httpstep.js');
db.httpstepitem = sequelize.import(__dirname + '/models/httpstepitem.js');
db.httptest = sequelize.import(__dirname + '/models/httptest.js');
db.httptestitem = sequelize.import(__dirname + '/models/httptestitem.js');
db.interface = sequelize.import(__dirname + '/models/interface.js');
db.items = sequelize.import(__dirname + '/models/items.js');
db.items_applications = sequelize.import(__dirname + '/models/items_applications.js');

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
