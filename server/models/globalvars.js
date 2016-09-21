/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('globalvars', {
    globalvarid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    snmp_lastsize: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'globalvars'
  });
};
