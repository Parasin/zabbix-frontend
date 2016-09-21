/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config', {
    configid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    refresh_unsupported: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    work_period: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '1-5,00:00-24:00'
    },
    alert_usrgrpid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'usrgrp',
        key: 'usrgrpid'
      }
    },
    event_ack_enable: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    event_expire: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '7'
    },
    event_show_max: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '100'
    },
    default_theme: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'blue-theme'
    },
    authentication_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    ldap_host: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ldap_port: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '389'
    },
    ldap_base_dn: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ldap_bind_dn: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ldap_bind_password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ldap_search_attribute: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    dropdown_first_entry: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    dropdown_first_remember: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    discovery_groupid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'groups',
        key: 'groupid'
      }
    },
    max_in_table: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '50'
    },
    search_limit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1000'
    },
    severity_color_0: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '97AAB3'
    },
    severity_color_1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '7499FF'
    },
    severity_color_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'FFC859'
    },
    severity_color_3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'FFA059'
    },
    severity_color_4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'E97659'
    },
    severity_color_5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'E45959'
    },
    severity_name_0: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Not classified'
    },
    severity_name_1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Information'
    },
    severity_name_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Warning'
    },
    severity_name_3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Average'
    },
    severity_name_4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'High'
    },
    severity_name_5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Disaster'
    },
    ok_period: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1800'
    },
    blink_period: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1800'
    },
    problem_unack_color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'DC0000'
    },
    problem_ack_color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'DC0000'
    },
    ok_unack_color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '00AA00'
    },
    ok_ack_color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '00AA00'
    },
    problem_unack_style: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    problem_ack_style: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    ok_unack_style: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    ok_ack_style: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    snmptrap_logging: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    server_check_interval: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '10'
    },
    hk_events_mode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    hk_events_trigger: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '365'
    },
    hk_events_internal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '365'
    },
    hk_events_discovery: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '365'
    },
    hk_events_autoreg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '365'
    },
    hk_services_mode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    hk_services: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '365'
    },
    hk_audit_mode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    hk_audit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '365'
    },
    hk_sessions_mode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    hk_sessions: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '365'
    },
    hk_history_mode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    hk_history_global: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    hk_history: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '90'
    },
    hk_trends_mode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    hk_trends_global: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    hk_trends: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '365'
    },
    default_inventory_mode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '-1'
    }
  }, {
    timestamps: false
  }, {
    tableName: 'config'
  });
};
