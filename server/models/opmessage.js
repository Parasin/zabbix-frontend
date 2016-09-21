/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('opmessage', {
    operationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'null',
        key: 'null'
      }
    },
    default_msg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    mediatypeid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'media_type',
        key: 'mediatypeid'
      }
    }
  }, {
    timestamps: false
  }, {
    tableName: 'opmessage'
  });
};
