'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export cryptorescuecore-lib', function() {
    var cryptorescuecore = require('../');
    should.exist(cryptorescuecore.lib);
    should.exist(cryptorescuecore.lib.Transaction);
    should.exist(cryptorescuecore.lib.Block);
  });
});
