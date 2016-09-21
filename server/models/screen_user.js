/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('screen_user', {
    screenuserid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    screenid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'screens',
        key: 'screenid'
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
    tableName: 'screen_user'
  });
};
