/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('screens', {
    screenid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hsize: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    vsize: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    templateid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'hosts',
        key: 'hostid'
      }
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'userid'
      }
    },
    private: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'screens'
  });
};
