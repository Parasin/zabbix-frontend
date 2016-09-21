/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('services_links', {
    linkid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    serviceupid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'services',
        key: 'serviceid'
      }
    },
    servicedownid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'services',
        key: 'serviceid'
      }
    },
    soft: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'services_links'
  });
};
