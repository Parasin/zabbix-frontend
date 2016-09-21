/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('optemplate', {
    optemplateid: {
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
    templateid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'hosts',
        key: 'hostid'
      }
    }
  }, {
    timestamps: false
  }, {
    tableName: 'optemplate'
  });
};
