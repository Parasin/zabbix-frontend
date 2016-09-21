/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('opmessage_usr', {
    opmessage_usrid: {
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
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'userid'
      }
    }
  }, {
    timestamps: false
  }, {
    tableName: 'opmessage_usr'
  });
};
