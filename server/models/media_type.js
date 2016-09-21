/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('media_type', {
    mediatypeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    smtp_server: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    smtp_helo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    smtp_email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    exec_path: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    gsm_modem: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    passwd: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    smtp_port: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '25'
    },
    smtp_security: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    smtp_verify_peer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    smtp_verify_host: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    smtp_authentication: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    exec_params: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'media_type'
  });
};
