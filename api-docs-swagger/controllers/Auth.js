'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.authRecoverpasswordPOST = function authRecoverpasswordPOST (req, res, next) {
  var email = req.swagger.params['email'].value;
  Auth.authRecoverpasswordPOST(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authSetpasswordPOST = function authSetpasswordPOST (req, res, next) {
  var token = req.swagger.params['token'].value;
  var password = req.swagger.params['password'].value;
  Auth.authSetpasswordPOST(token,password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authSigninPOST = function authSigninPOST (req, res, next) {
  var user = req.swagger.params['user'].value;
  Auth.authSigninPOST(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authSignoutPOST = function authSignoutPOST (req, res, next) {
  Auth.authSignoutPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authSignupPOST = function authSignupPOST (req, res, next) {
  var user = req.swagger.params['user'].value;
  Auth.authSignupPOST(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authSignupVerifyGET = function authSignupVerifyGET (req, res, next) {
  var token = req.swagger.params['token'].value;
  Auth.authSignupVerifyGET(token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
