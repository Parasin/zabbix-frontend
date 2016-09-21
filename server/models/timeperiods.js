/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('timeperiods', {
    timeperiodid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    timeperiod_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    every: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    dayofweek: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    start_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    period: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    start_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'timeperiods'
  });
};
