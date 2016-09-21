/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('conditions', {
    conditionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    actionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'actions',
        key: 'actionid'
      }
    },
    conditiontype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    operator: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'conditions'
  });
};
