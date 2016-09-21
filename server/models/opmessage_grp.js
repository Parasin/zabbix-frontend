/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('opmessage_grp', {
    opmessage_grpid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    operationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'operations',
        key: 'operationid'
      }
    },
    usrgrpid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'usrgrp',
        key: 'usrgrpid'
      }
    }
  }, {
    timestamps: false
  }, {
    tableName: 'opmessage_grp'
  });
};
