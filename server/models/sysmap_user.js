/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysmap_user', {
    sysmapuserid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sysmapid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'sysmaps',
        key: 'sysmapid'
      }
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'userid'
      }
    },
    permission: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '2'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'sysmap_user'
  });
};
