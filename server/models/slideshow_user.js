/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('slideshow_user', {
    slideshowuserid: {
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
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'userid'
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
    tableName: 'slideshow_user'
  });
};
