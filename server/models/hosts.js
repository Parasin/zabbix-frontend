/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hosts', {
    hostid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    proxy_hostid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'hosts',
        key: 'hostid'
      }
    },
    host: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    disable_until: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    error: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    available: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    errors_from: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    lastaccess: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    ipmi_authtype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    ipmi_privilege: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '2'
    },
    ipmi_username: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ipmi_password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ipmi_disable_until: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    ipmi_available: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    snmp_disable_until: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    snmp_available: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    maintenanceid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'maintenances',
        key: 'maintenanceid'
      }
    },
    maintenance_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    maintenance_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    maintenance_from: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    ipmi_errors_from: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    snmp_errors_from: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    ipmi_error: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    snmp_error: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    jmx_disable_until: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    jmx_available: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    jmx_errors_from: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    jmx_error: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    flags: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    templateid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'hosts',
        key: 'hostid'
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    tls_connect: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    tls_accept: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    tls_issuer: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    tls_subject: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    tls_psk_identity: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    tls_psk: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'hosts'
  });
};
