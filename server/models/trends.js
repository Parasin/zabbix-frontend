/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trends', {
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    clock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    value_min: {
      type: 'NUMERIC',
      allowNull: false,
      defaultValue: '0.0000'
    },
    value_avg: {
      type: 'NUMERIC',
      allowNull: false,
      defaultValue: '0.0000'
    },
    value_max: {
      type: 'NUMERIC',
      allowNull: false,
      defaultValue: '0.0000'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'trends'
  });
};
