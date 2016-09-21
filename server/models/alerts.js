/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alerts', {
    alertid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    actionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'actions',
        key: 'actionid'
      }
    },
    eventid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'events',
        key: 'eventid'
      }
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'userid'
      }
    },
    clock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    mediatypeid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'media_type',
        key: 'mediatypeid'
      }
    },
    sendto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    retries: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    error: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    esc_step: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    alerttype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'alerts'
  });
};
