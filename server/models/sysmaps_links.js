/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysmaps_links', {
    linkid: {
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
    selementid1: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'sysmaps_elements',
        key: 'selementid'
      }
    },
    selementid2: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'sysmaps_elements',
        key: 'selementid'
      }
    },
    drawtype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '000000'
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'sysmaps_links'
  });
};
