'use strict';


/**
 * User password recovery
 * Let the user start the password recovery process
 *
 * email UserEmail User email to send the verification link to
 * returns UserEmail
 **/
exports.authRecoverpasswordPOST = function(email) {
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
 * User password set
 * Let the user set the password
 *
 * token Object Token to verify the password set of the user
 * password UserPassword New user password
 * returns UserEmail
 **/
exports.authSetpasswordPOST = function(token,password) {
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
 * User sign in
 * Sign the user in to the system
 *
 * user AuthSignin Credentials to use to sign in
 * returns UserEmail
 **/
exports.authSigninPOST = function(user) {
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
 * User sign out
 * Sign the user out of the system
 *
 * returns UserEmail
 **/
exports.authSignoutPOST = function() {
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
 * User sign up
 * Sign the user up in the system
 *
 * user AuthSignup User data to use to sign up
 * returns UserEmail
 **/
exports.authSignupPOST = function(user) {
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
 * User sign up verification
 * Verify the sign up of the user in the system
 *
 * token Object Token to verify the sign up of the user in the system
 * returns UserEmail
 **/
exports.authSignupVerifyGET = function(token) {
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

