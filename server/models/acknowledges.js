/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acknowledges', {
    acknowledgeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'userid'
      }
    },
    eventid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'events',
        key: 'eventid'
      }
    },
    clock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'acknowledges'
  });
};
