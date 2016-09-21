/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operations', {
    operationid: {
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
    operationtype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    esc_period: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    esc_step_from: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    esc_step_to: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    evaltype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'operations'
  });
};
