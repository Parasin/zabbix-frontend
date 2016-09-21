/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('group_prototype', {
    group_prototypeid: {
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    groupid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'groups',
        key: 'groupid'
      }
    },
    templateid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'group_prototype',
        key: 'group_prototypeid'
      }
    }
  }, {
    timestamps: false
  }, {
    tableName: 'group_prototype'
  });
};
