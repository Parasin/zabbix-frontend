/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_application_prototype', {
    item_application_prototypeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    application_prototypeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'application_prototype',
        key: 'application_prototypeid'
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
    tableName: 'item_application_prototype'
  });
};
