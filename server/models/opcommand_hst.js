/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('opcommand_hst', {
    opcommand_hstid: {
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
    hostid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'hosts',
        key: 'hostid'
      }
    }
  }, {
    timestamps: false
  }, {
    tableName: 'opcommand_hst'
  });
};
