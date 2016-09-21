/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('graph_theme', {
    graphthemeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    theme: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    backgroundcolor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    graphcolor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    gridcolor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    maingridcolor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    gridbordercolor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    textcolor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    highlightcolor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    leftpercentilecolor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    rightpercentilecolor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    nonworktimecolor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'graph_theme'
  });
};
