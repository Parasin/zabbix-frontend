/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dchecks', {
    dcheckid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    druleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'drules',
        key: 'druleid'
      }
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    key_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    snmp_community: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ports: {
      type: DataTypes.STRING,
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
    uniq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
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
    snmpv3_contextname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'dchecks'
  });
};
