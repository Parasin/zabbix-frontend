/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysmap_url', {
    sysmapurlid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sysmapid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'sysmaps',
        key: 'sysmapid'
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
    },
    elementtype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'sysmap_url'
  });
};
