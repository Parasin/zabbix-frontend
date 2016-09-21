/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('opcommand_grp', {
    opcommand_grpid: {
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
    groupid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'groups',
        key: 'groupid'
      }
    }
  }, {
    timestamps: false
  }, {
    tableName: 'opcommand_grp'
  });
};
