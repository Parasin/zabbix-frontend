/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('media', {
    mediaid: {
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
    mediatypeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'media_type',
        key: 'mediatypeid'
      }
    },
    sendto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    severity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '63'
    },
    period: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '1-7,00:00-24:00'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'media'
  });
};
