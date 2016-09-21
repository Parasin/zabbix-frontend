/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('actions', {
    actionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    eventsource: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    evaltype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    esc_period: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    def_shortdata: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    def_longdata: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    recovery_msg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    r_shortdata: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    r_longdata: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    formula: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'actions'
  });
};
