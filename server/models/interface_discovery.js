/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('interface_discovery', {
    interfaceid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'null',
        key: 'null'
      }
    },
    parent_interfaceid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'interface',
        key: 'interfaceid'
      }
    }
  }, {
    timestamps: false
  }, {
    tableName: 'interface_discovery'
  });
};
