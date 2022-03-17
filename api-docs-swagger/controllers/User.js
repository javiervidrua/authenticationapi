'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.userDELETE = function userDELETE (req, res, next) {
  var password = req.swagger.params['password'].value;
  User.userDELETE(password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userGET = function userGET (req, res, next) {
  User.userGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userPUT = function userPUT (req, res, next) {
  var user = req.swagger.params['user'].value;
  User.userPUT(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
