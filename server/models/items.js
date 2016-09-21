/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('items', {
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    snmp_community: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    snmp_oid: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    hostid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'hosts',
        key: 'hostid'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    key_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    delay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    history: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '90'
    },
    trends: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '365'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    value_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    trapper_hosts: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    units: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    multiplier: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    delta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    snmpv3_securityname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    snmpv3_securitylevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    snmpv3_authpassphrase: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    snmpv3_privpassphrase: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    formula: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    error: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    lastlogsize: {
      type: 'NUMERIC',
      allowNull: false,
      defaultValue: '0'
    },
    logtimefmt: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    templateid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'items',
        key: 'itemid'
      }
    },
    valuemapid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'valuemaps',
        key: 'valuemapid'
      }
    },
    delay_flex: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    params: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    ipmi_sensor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    data_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    authtype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    publickey: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    privatekey: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    mtime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    flags: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    interfaceid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'interface',
        key: 'interfaceid'
      }
    },
    port: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    inventory_link: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    lifetime: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '30'
    },
    snmpv3_authprotocol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    snmpv3_privprotocol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    snmpv3_contextname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    evaltype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'items'
  });
};
