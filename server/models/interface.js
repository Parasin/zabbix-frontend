/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('interface', {
    interfaceid: {
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
    main: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    useip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '127.0.0.1'
    },
    dns: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    port: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '10050'
    },
    bulk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'interface'
  });
};
