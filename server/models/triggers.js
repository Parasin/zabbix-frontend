/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('triggers', {
    triggerid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    expression: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    lastchange: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    error: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    templateid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'triggers',
        key: 'triggerid'
      }
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    flags: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'triggers'
  });
};
