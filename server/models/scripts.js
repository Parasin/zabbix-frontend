/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scripts', {
    scriptid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    command: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    host_access: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '2'
    },
    usrgrpid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'usrgrp',
        key: 'usrgrpid'
      }
    },
    groupid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'groups',
        key: 'groupid'
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    confirmation: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    execute_on: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'scripts'
  });
};
