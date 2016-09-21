/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('opcommand', {
    operationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'null',
        key: 'null'
      }
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    scriptid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'scripts',
        key: 'scriptid'
      }
    },
    execute_on: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    port: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    authtype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    publickey: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    privatekey: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    command: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'opcommand'
  });
};
