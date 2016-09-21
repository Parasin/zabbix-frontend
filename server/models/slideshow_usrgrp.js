/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('slideshow_usrgrp', {
    slideshowusrgrpid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    slideshowid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'slideshows',
        key: 'slideshowid'
      }
    },
    usrgrpid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'usrgrp',
        key: 'usrgrpid'
      }
    },
    permission: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '2'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'slideshow_usrgrp'
  });
};
