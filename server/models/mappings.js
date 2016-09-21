/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mappings', {
    mappingid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    valuemapid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'valuemaps',
        key: 'valuemapid'
      }
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    newvalue: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'mappings'
  });
};
