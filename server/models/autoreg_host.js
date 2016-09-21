/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autoreg_host', {
    autoreg_hostid: {
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
    listen_ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    listen_port: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    listen_dns: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    host_metadata: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'autoreg_host'
  });
};
