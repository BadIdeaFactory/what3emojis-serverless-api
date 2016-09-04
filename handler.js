'use strict';

const geohash = require('geohash-emoji').coordAt;

module.exports.addressOf = (event, context, cb) => {
  let emoji = geohash(event.latitude, event.longitude);
  cb(null, { address: emoji, event });
};
