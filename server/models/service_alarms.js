/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('service_alarms', {
    servicealarmid: {
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
    clock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'service_alarms'
  });
};
