/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('httpstepitem', {
    httpstepitemid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    httpstepid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'httpstep',
        key: 'httpstepid'
      }
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'items',
        key: 'itemid'
      }
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'httpstepitem'
  });
};
