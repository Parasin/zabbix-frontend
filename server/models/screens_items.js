/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('screens_items', {
    screenitemid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    screenid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'screens',
        key: 'screenid'
      }
    },
    resourcetype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    resourceid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    width: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '320'
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '200'
    },
    x: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    y: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    colspan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    rowspan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    elements: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '25'
    },
    valign: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    halign: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    style: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    dynamic: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    sort_triggers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    application: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    max_columns: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '3'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'screens_items'
  });
};
