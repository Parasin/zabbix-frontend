/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('images', {
    imageid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    imagetype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0'
    },
    image: {
      type: 'BYTEA',
      allowNull: false,
      defaultValue: '\x'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'images'
  });
};
