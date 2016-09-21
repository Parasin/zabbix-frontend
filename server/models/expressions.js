/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expressions', {
    expressionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    regexpid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'regexps',
        key: 'regexpid'
      }
    },
    expression: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    expression_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    exp_delimiter: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    case_sensitive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'expressions'
  });
};
