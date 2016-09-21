var methods = {
    getApiVersion: function () {
        return {
            "jsonrpc": "2.0"
            , "method": "apiinfo.version"
            , "params": []
            , "id": 1
        };
    },

    login: function (username, password) {
        return {
            "jsonrpc": "2.0"
            , "method": "user.login"
            , "params": {
                "user": username
                , "password": password
            }
            , "id": 1
        };
    },

    logout: function (SESSIONID) {
        return {
            "jsonrpc": "2.0"
            , "method": "user.logout"
            , "params": {}
            , "auth": SESSIONID
            , "id": 1
        };
    },

    getActions: function (SESSIONID) {
        return {
            "jsonrpc": "2.0"
            , "method": "action.get"
            , "params": {
                "output": "extend"
                , "selectOperations": "extend"
                , "selectFilter": "extend"
                , "filter": {
                    "eventsource": 0
                }
                , "actionids": [17, 7, 13, 25, 26, 18, 20, 21, 22, 19, 23, 28, 29, 27]
            }
            , "auth": SESSIONID
            , "id": 1
        };
    },
    
    createActions: function (SESSIONID, ACTIONS) {
        return {
            "jsonrpc": "2.0"
            , "method": "action.create"
            , "params": ACTIONS
            , "auth": SESSIONID
            , id: 1
        }
    },
    
    getHostGroups: function (SESSIONID) {
        return {
            "jsonrpc": "2.0"
            , "method": "hostgroup.get"
            , "params": {
                "output": "extend"
                , "with_hosts_and_templates": 1
            }
            , "auth": SESSIONID
            , "id": 1
        };
    },

    getHosts: function (SESSIONID) {
        return {
            "jsonrpc": "2.0"
            , "method": "host.get"
            , "params": {
                "output": "extend"
                , "monitored_hosts": 1
            }
            , "auth": SESSIONID
            , "id": 1
        };
    },

    getItems: function (SESSIONID, applicationIds) {
        return {
            "jsonrpc": "2.0"
            , "method": "item.get"
            , "params": {
                "output": "extend"
                , "applicationids": applicationIds
            }
            , "auth": SESSIONID
            , "id": 1
        };
    },
    
    createItems: function (SESSIONID, items) {
      return {
            "jsonrpc": "2.0"
            , "method": "item.create"
            , "params": {
                "applications": [
                    "1584"
                ]
            }
            , "auth": SESSIONID
            , "id": 1
            };
    },

    getTemplates: function (SESSIONID) {
        return {
            "jsonrpc": "2.0"
            , "method": "template.get"
            , "params": {
                "output": "extend"
                , "search": "Template"
            }
            , "auth": SESSIONID
            , "id": 1
        };
    },

    getUsers: function (SESSIONID) {
        return {
            "jsonrpc": "2.0"
            , "method": "user.get"
            , "params": {
                "output": "extend"
            }
            , "auth": SESSIONID
            , "id": 1
        };
    },

    getUser: function (SESSIONID, data) {
        return {
            "jsonrpc": "2.0"
            , "method": "user.get"
            , "params": {
                "output": "extend"
                , "search": data
            }
            , "auth": SESSIONID
            , "id": 1
        };
    },
    
    getUserMedia: function (SESSIONID, user) {
        return {
            "jsonrpc": "2.0"
            , "method": "usermedia.get"
            , "params": {
                "output": "extend"
                , "userids": user.userid
            }
            , "auth": SESSIONID
            , "id": 1
        }
    },

    createMedia: function (SESSIONID, media) {
        return {
            "jsonrpc": "2.0"
            , "method": "user.addmedia"
            , "params": {
                "users": [
                    {
                        "userid": media.userid
                    }
                , ]
                , "medias": {
                    "mediatypeid": media.mediatypeid
                    , "sendto": media.sendto
                    , "active": media.active
                    , "severity": media.severity
                    , "period": media.period
                }
            }
            , "auth": SESSIONID
            , "id": 1
        }
    },
    
    createUser: function (SESSIONID, user) {
        return {
            "jsonrpc": "2.0"
            , "method": "user.create"
            , "params": {
                "alias": user.alias
                , "passwd": user.password
                , "usrgrps": [
                    {
                        "usrgrpid": user.group_id
                    }
                ]
            }
            , "auth": SESSIONID
            , "id": 1
        };
    },

    configExport: function (hosts, templates, groups, SESSIONID) {
        return {
            "jsonrpc": "2.0"
            , "method": "configuration.export"
            , "params": {
                "options": {
                    "hosts": hosts
                    , "templates": templates
                    , "groups": groups
                }
                , "format": "json"
            }
            , "auth": SESSIONID
            , "id": 1
        };
    },

    getHistoryByHost: function (SESSIONID, hosts) {
        return {
            "jsonrpc": "2.0"
            , "method": "history.get"
            , "params": {
                "output": "extend"
                , "history": 3
                , "hostids": hosts
                , "sortfield": "clock"
                , "sortorder": "DESC"
                , "limit": 300
            }
            , "auth": SESSIONID
            , "id": 1
        };
    },

    getHistoryByItem: function (SESSIONID, items) {
        return {
            "jsonrpc": "2.0"
            , "method": "history.get"
            , "params": {
                "output": "extend"
                , "history": 3
                , "itemids": items
                , "sortfield": "clock"
                , "sortorder": "DESC"
                , "limit": 10
            }
            , "auth": SESSIONID
            , "id": 1
        };
    },

    getAllActiveTriggers: function (SESSIONID) {
        return {
            "jsonrpc": "2.0"
            , "method": "trigger.get"
            , "params": {
                "output": "extend"
                , "selectHosts": "extend"
                , "selectGroups": "extend"
                , "monitored": true
            }
            , "auth": SESSIONID
            , "id": 1
        };
    }
};

module.exports = methods;