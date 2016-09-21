/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dhosts', {
    dhostid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    druleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'drules',
        key: 'druleid'
      }
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    lastup: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    lastdown: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'dhosts'
  });
};
