/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('screen_usrgrp', {
    screenusrgrpid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    screenid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'screens',
        key: 'screenid'
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
    tableName: 'screen_usrgrp'
  });
};
