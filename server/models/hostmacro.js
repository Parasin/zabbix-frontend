/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hostmacro', {
    hostmacroid: {
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
    macro: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'hostmacro'
  });
};
