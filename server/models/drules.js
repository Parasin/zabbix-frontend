/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('drules', {
    druleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    proxy_hostid: {
      type: DataTypes.BIGINT,
      allowNull: true,
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
    iprange: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    delay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '3600'
    },
    nextcheck: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'drules'
  });
};
