/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysmaps_link_triggers', {
    linktriggerid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    linkid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'sysmaps_links',
        key: 'linkid'
      }
    },
    triggerid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'triggers',
        key: 'triggerid'
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
    }
  }, {
    timestamps: false
  }, {
    tableName: 'sysmaps_link_triggers'
  });
};
