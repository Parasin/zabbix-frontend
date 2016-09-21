/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('maintenances_windows', {
    maintenance_timeperiodid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    maintenanceid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'maintenances',
        key: 'maintenanceid'
      }
    },
    timeperiodid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'timeperiods',
        key: 'timeperiodid'
      }
    }
  }, {
    timestamps: false
  }, {
    tableName: 'maintenances_windows'
  });
};
