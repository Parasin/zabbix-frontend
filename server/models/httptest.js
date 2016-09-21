/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('httptest', {
    httptestid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    applicationid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'applications',
        key: 'applicationid'
      }
    },
    nextcheck: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    delay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '60'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    variables: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    agent: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Zabbix'
    },
    authentication: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    http_user: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    http_password: {
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
    templateid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'httptest',
        key: 'httptestid'
      }
    },
    http_proxy: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    retries: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    ssl_cert_file: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ssl_key_file: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ssl_key_password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    verify_peer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    verify_host: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    headers: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'httptest'
  });
};
