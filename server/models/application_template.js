/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('application_template', {
    application_templateid: {
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
    templateid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'applications',
        key: 'applicationid'
      }
    }
  }, {
    timestamps: false
  }, {
    tableName: 'application_template'
  });
};
