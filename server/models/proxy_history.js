/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proxy_history', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    clock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    timestamp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    severity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    logeventid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    ns: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    lastlogsize: {
      type: 'NUMERIC',
      allowNull: false,
      defaultValue: '0'
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
    }
  }, {
    timestamps: false
  }, {
    tableName: 'proxy_history'
  });
};
