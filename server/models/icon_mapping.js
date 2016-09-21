/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('icon_mapping', {
    iconmappingid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    iconmapid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'icon_map',
        key: 'iconmapid'
      }
    },
    iconid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'images',
        key: 'imageid'
      }
    },
    inventory_link: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    expression: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    sortorder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'icon_mapping'
  });
};
