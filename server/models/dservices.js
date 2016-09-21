/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dservices', {
    dserviceid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    dhostid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'dhosts',
        key: 'dhostid'
      }
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    key_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    port: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    lastup: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    lastdown: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    dcheckid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'dchecks',
        key: 'dcheckid'
      }
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    dns: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'dservices'
  });
};
