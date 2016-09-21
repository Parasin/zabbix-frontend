/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('slides', {
    slideid: {
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
    screenid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'screens',
        key: 'screenid'
      }
    },
    step: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    delay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'slides'
  });
};
