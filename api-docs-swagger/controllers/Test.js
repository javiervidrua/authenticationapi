'use strict';

var utils = require('../utils/writer.js');
var Test = require('../service/TestService');

module.exports.testDbGET = function testDbGET (req, res, next) {
  Test.testDbGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
