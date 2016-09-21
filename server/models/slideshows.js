/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('slideshows', {
    slideshowid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    delay: {
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
    tableName: 'slideshows'
  });
};
