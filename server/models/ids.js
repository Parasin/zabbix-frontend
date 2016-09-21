/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ids', {
    table_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    field_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    nextid: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    timestamps: false
  }, {
    tableName: 'ids'
  });
};
