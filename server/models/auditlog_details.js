/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auditlog_details', {
    auditdetailid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    auditid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'auditlog',
        key: 'auditid'
      }
    },
    table_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    field_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    oldvalue: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    newvalue: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'auditlog_details'
  });
};
