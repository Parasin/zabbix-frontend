/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('httptestitem', {
    httptestitemid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    httptestid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'httptest',
        key: 'httptestid'
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
    tableName: 'httptestitem'
  });
};
