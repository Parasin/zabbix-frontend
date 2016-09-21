/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_groups', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usrgrpid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'usrgrp',
        key: 'usrgrpid'
      }
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'userid'
      }
    }
  }, {
    timestamps: false
  }, {
    tableName: 'users_groups'
  });
};
