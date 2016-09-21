/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usrgrp', {
    usrgrpid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    gui_access: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    users_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    debug_mode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'usrgrp'
  });
};
