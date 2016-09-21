/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('host_discovery', {
    hostid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'null',
        key: 'null'
      }
    },
    parent_hostid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'hosts',
        key: 'hostid'
      }
    },
    parent_itemid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'items',
        key: 'itemid'
      }
    },
    host: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    lastcheck: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    ts_delete: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'host_discovery'
  });
};
