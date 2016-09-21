/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rights', {
    rightid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    groupid: {
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
      defaultValue: '0'
    },
    id: {
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
    tableName: 'rights'
  });
};
