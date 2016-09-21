/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('history', {
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    clock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    value: {
      type: 'NUMERIC',
      allowNull: false,
      defaultValue: '0.0000'
    },
    ns: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'history'
  });
};
