/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysmap_usrgrp', {
    sysmapusrgrpid: {
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
    usrgrpid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'usrgrp',
        key: 'usrgrpid'
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
    tableName: 'sysmap_usrgrp'
  });
};
