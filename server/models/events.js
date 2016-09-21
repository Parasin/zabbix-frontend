/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events', {
    eventid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    source: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    object: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    objectid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    clock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    acknowledged: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    ns: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'events'
  });
};
