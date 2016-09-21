/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('history_log', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
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
    }
  }, {
    timestamps: false
  }, {
    tableName: 'history_log'
  });
};
