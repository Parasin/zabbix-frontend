/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysmap_element_url', {
    sysmapelementurlid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    selementid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'sysmaps_elements',
        key: 'selementid'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'sysmap_element_url'
  });
};
