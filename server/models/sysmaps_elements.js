/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysmaps_elements', {
    selementid: {
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
    elementid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    elementtype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    iconid_off: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'images',
        key: 'imageid'
      }
    },
    iconid_on: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'images',
        key: 'imageid'
      }
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    label_location: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '-1'
    },
    x: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    y: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    iconid_disabled: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'images',
        key: 'imageid'
      }
    },
    iconid_maintenance: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'images',
        key: 'imageid'
      }
    },
    elementsubtype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    areatype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    width: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '200'
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '200'
    },
    viewtype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    use_iconmap: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    application: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'sysmaps_elements'
  });
};
