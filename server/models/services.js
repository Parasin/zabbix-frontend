/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('services', {
    serviceid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    algorithm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    triggerid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'triggers',
        key: 'triggerid'
      }
    },
    showsla: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    goodsla: {
      type: 'NUMERIC',
      allowNull: false,
      defaultValue: '99.9'
    },
    sortorder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'services'
  });
};
