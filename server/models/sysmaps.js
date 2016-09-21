/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysmaps', {
    sysmapid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    width: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '600'
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '400'
    },
    backgroundid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'images',
        key: 'imageid'
      }
    },
    label_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '2'
    },
    label_location: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    highlight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    expandproblem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    markelements: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    show_unack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    grid_size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '50'
    },
    grid_show: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    grid_align: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    label_format: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    label_type_host: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '2'
    },
    label_type_hostgroup: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '2'
    },
    label_type_trigger: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '2'
    },
    label_type_map: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '2'
    },
    label_type_image: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '2'
    },
    label_string_host: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    label_string_hostgroup: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    label_string_trigger: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    label_string_map: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    label_string_image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    iconmapid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'icon_map',
        key: 'iconmapid'
      }
    },
    expand_macros: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    severity_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'userid'
      }
    },
    private: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'sysmaps'
  });
};
