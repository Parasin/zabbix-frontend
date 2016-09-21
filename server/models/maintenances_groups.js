/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('maintenances_groups', {
    maintenance_groupid: {
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
    groupid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'groups',
        key: 'groupid'
      }
    }
  }, {
    timestamps: false
  }, {
    tableName: 'maintenances_groups'
  });
};
