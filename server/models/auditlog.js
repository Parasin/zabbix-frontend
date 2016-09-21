/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auditlog', {
    auditid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'userid'
      }
    },
    clock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    action: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    resourcetype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    details: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0'
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    resourceid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    resourcename: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'auditlog'
  });
};
