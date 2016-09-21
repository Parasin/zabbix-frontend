/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('opinventory', {
    operationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'null',
        key: 'null'
      }
    },
    inventory_mode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'opinventory'
  });
};
