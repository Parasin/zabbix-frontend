/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dbversion', {
    mandatory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    optional: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'dbversion'
  });
};
