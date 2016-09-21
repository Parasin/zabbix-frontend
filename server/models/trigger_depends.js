/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trigger_depends', {
    triggerdepid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    triggerid_down: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'triggers',
        key: 'triggerid'
      }
    },
    triggerid_up: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'triggers',
        key: 'triggerid'
      }
    }
  }, {
    timestamps: false
  }, {
    tableName: 'trigger_depends'
  });
};
