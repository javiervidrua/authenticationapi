'use strict';

var utils = require('../utils/writer.js');
var Group = require('../service/GroupService');

module.exports.groupGET = function groupGET (req, res, next) {
  Group.groupGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupPOST = function groupPOST (req, res, next) {
  var group = req.swagger.params['group'].value;
  Group.groupPOST(group)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupidDELETE = function groupidDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Group.groupidDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupidGET = function groupidGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Group.groupidGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupidPUT = function groupidPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var group = req.swagger.params['group'].value;
  Group.groupidPUT(id,group)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupidUserDELETE = function groupidUserDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  var user = req.swagger.params['user'].value;
  Group.groupidUserDELETE(id,user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupidUserGET = function groupidUserGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Group.groupidUserGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupidUserPOST = function groupidUserPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  var user = req.swagger.params['user'].value;
  Group.groupidUserPOST(id,user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupidUserPUT = function groupidUserPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var user = req.swagger.params['user'].value;
  Group.groupidUserPUT(id,user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
