var md5 = require('md5');

module.exports = {
  tableName: 'msi_service_10007',
  schema: true,
  attributes: {
    msi_id: {type: 'string', unique: true},
    account_id: {type: 'integer', unique: true},
    channel: {type: 'string'},
    channel_cfg: {type: 'string'},
    referrer: {type: 'string'},
    platform: {type: 'string'},
    device_id: {type: 'string'},
    last_login: {type: 'datetime'}
  },
  beforeCreate(values, cb) {
    var unix = Math.round(+new Date()/1000);
    values["msi_id"] = '10007' + unix +  (Math.floor(Math.random() * (999999 - 100000)) + 100000);
    cb();
  }
}
