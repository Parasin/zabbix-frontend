/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('opconditions', {
    opconditionid: {
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
    conditiontype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    operator: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'opconditions'
  });
};
