'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1537238231259_6818';

  // add your config here
  config.middleware = [];

  // sequlize
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'user',
    username: 'root',
    password: '219887'
  }
  //csrf
  // csrf token
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // config.security = {
  //   csrf: {
  //     queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
  //     bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
  //     headerName: '_csrf'
  //   },
  // }

  return config;
};