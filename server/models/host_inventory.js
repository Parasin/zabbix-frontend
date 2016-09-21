/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('host_inventory', {
    hostid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'null',
        key: 'null'
      }
    },
    inventory_mode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    type_full: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    os: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    os_full: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    os_short: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    serialno_a: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    serialno_b: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    asset_tag: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    macaddress_a: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    macaddress_b: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    hardware: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    hardware_full: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    software: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    software_full: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    software_app_a: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    software_app_b: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    software_app_c: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    software_app_d: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    software_app_e: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    contact: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    location_lat: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    location_lon: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    chassis: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    hw_arch: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    vendor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    contract_number: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    installer_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    deployment_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    url_a: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    url_b: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    url_c: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    host_networks: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    host_netmask: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    host_router: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    oob_ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    oob_netmask: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    oob_router: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    date_hw_purchase: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    date_hw_install: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    date_hw_expiry: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    date_hw_decomm: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    site_address_a: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    site_address_b: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    site_address_c: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    site_city: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    site_state: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    site_country: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    site_zip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    site_rack: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    site_notes: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    poc_1_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    poc_1_email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    poc_1_phone_a: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    poc_1_phone_b: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    poc_1_cell: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    poc_1_screen: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    poc_1_notes: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    poc_2_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    poc_2_email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    poc_2_phone_a: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    poc_2_phone_b: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    poc_2_cell: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    poc_2_screen: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    poc_2_notes: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false
  }, {
    tableName: 'host_inventory'
  });
};
