/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('services_times', {
    timeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    serviceid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'services',
        key: 'serviceid'
      }
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    ts_from: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    ts_to: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    note: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'services_times'
  });
};
