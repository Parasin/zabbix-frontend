/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profiles', {
    profileid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'userid'
      }
    },
    idx: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    idx2: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    value_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    value_int: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    value_str: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'profiles'
  });
};
