/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proxy_dhistory', {
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
    druleid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    port: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    key_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    dcheckid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dns: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'proxy_dhistory'
  });
};
