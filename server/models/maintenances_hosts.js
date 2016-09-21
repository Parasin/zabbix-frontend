/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('maintenances_hosts', {
    maintenance_hostid: {
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
    hostid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'hosts',
        key: 'hostid'
      }
    }
  }, {
    timestamps: false
  }, {
    tableName: 'maintenances_hosts'
  });
};
