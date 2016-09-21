/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applications', {
    applicationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    hostid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'hosts',
        key: 'hostid'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    flags: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'applications'
  });
};
