/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('items_applications', {
    itemappid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    applicationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'applications',
        key: 'applicationid'
      }
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'items',
        key: 'itemid'
      }
    }
  }, {
    timestamps: false
  }, {
    tableName: 'items_applications'
  });
};
