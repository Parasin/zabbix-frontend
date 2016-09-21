/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('application_discovery', {
    application_discoveryid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    applicationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'applications',
        key: 'applicationid'
      }
    },
    application_prototypeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'application_prototype',
        key: 'application_prototypeid'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    lastcheck: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    ts_delete: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'application_discovery'
  });
};
