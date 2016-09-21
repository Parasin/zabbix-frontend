/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    passwd: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    autologin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    autologout: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '900'
    },
    lang: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'en_GB'
    },
    refresh: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '30'
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    theme: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'default'
    },
    attempt_failed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    attempt_ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    attempt_clock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    rows_per_page: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '50'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'users'
  });
};
