var chai = require('chai'),
    should = chai.should,
    expect = chai.expect,
    Promise = require('bluebird')
    request = require('superagent-promise')(require('superagent'), Promise),
    chaiAsPromised = require('chai-as-promised');
     