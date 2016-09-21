/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('housekeeper', {
    housekeeperid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tablename: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    field: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    value: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    timestamps: false
  }, {
    tableName: 'housekeeper'
  });
};
