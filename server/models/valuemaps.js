/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('valuemaps', {
    valuemapid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'valuemaps'
  });
};
