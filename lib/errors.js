'use strict';

var createError = require('errno').create;

var CryptoRescueCoreNodeError = createError('CryptoRescueCoreNodeError');

var RPCError = createError('RPCError', CryptoRescueCoreNodeError);

module.exports = {
  Error: CryptoRescueCoreNodeError,
  RPCError: RPCError
};
