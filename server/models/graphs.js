/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('graphs', {
    graphid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    width: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '900'
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '200'
    },
    yaxismin: {
      type: 'NUMERIC',
      allowNull: false,
      defaultValue: '0'
    },
    yaxismax: {
      type: 'NUMERIC',
      allowNull: false,
      defaultValue: '100'
    },
    templateid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'graphs',
        key: 'graphid'
      }
    },
    show_work_period: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    show_triggers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    graphtype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    show_legend: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    show_3d: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    percent_left: {
      type: 'NUMERIC',
      allowNull: false,
      defaultValue: '0'
    },
    percent_right: {
      type: 'NUMERIC',
      allowNull: false,
      defaultValue: '0'
    },
    ymin_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    ymax_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    ymin_itemid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'items',
        key: 'itemid'
      }
    },
    ymax_itemid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'items',
        key: 'itemid'
      }
    },
    flags: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'graphs'
  });
};
