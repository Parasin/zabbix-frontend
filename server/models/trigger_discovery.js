/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trigger_discovery', {
    triggerid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'null',
        key: 'null'
      }
    },
    parent_triggerid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'triggers',
        key: 'triggerid'
      }
    }
  }, {
    timestamps: false
  }, {
    tableName: 'trigger_discovery'
  });
};
