/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('escalations', {
    escalationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    actionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    triggerid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    eventid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    r_eventid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    nextcheck: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    esc_step: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    timestamps: false
  }, {
    tableName: 'escalations'
  });
};
