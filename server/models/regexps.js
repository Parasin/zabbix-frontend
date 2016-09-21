/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regexps', {
    regexpid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    test_string: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'regexps'
  });
};
