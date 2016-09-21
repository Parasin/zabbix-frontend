/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('graphs_items', {
    gitemid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    graphid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'graphs',
        key: 'graphid'
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
    drawtype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    sortorder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '009600'
    },
    yaxisside: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    calc_fnc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '2'
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'graphs_items'
  });
};
