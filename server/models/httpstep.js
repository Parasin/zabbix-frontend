/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('httpstep', {
    httpstepid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    httptestid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'httptest',
        key: 'httptestid'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    timeout: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '15'
    },
    posts: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    required: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    status_codes: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    variables: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    follow_redirects: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    retrieve_mode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    headers: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'httpstep'
  });
};
