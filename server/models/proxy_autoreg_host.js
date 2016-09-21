/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proxy_autoreg_host', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    clock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
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
    tableName: 'proxy_autoreg_host'
  });
};
