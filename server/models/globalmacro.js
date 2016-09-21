/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('globalmacro', {
    globalmacroid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    macro: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'globalmacro'
  });
};
