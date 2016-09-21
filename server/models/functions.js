/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('functions', {
    functionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'items',
        key: 'itemid'
      }
    },
    triggerid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'triggers',
        key: 'triggerid'
      }
    },
    function: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    parameter: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'functions'
  });
};
