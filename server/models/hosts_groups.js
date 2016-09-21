/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hosts_groups', {
    hostgroupid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    hostid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'hosts',
        key: 'hostid'
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
    tableName: 'hosts_groups'
  });
};
