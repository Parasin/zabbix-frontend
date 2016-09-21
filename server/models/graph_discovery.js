/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('graph_discovery', {
    graphid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'null',
        key: 'null'
      }
    },
    parent_graphid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'graphs',
        key: 'graphid'
      }
    }
  }, {
    timestamps: false
  }, {
    tableName: 'graph_discovery'
  });
};
