/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('icon_map', {
    iconmapid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    default_iconid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'images',
        key: 'imageid'
      }
    }
  }, {
    timestamps: false
  }, {
    tableName: 'icon_map'
  });
};
