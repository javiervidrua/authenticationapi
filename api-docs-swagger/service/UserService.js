'use strict';


/**
 * Delete the user's data
 * Let the user delete his data
 *
 * password UserPassword User's password
 * returns UserData
 **/
exports.userDELETE = function(password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve the user's data
 * Let the user retrieve his data
 *
 * returns UserData
 **/
exports.userGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update the user's data
 * Let the user update his data
 *
 * user UserPut User's new data
 * returns UserData
 **/
exports.userPUT = function(user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

