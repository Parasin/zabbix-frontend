/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('application_prototype', {
    application_prototypeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'items',
        key: 'itemid'
      }
    },
    templateid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'application_prototype',
        key: 'application_prototypeid'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'application_prototype'
  });
};
