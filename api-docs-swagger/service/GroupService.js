'use strict';


/**
 * Retrieve the user's groups
 * Let the user retrieve a list of the groups that he belongs to
 *
 * returns UserGroups
 **/
exports.groupGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bytes": [],
  "empty": true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a group
 * Let the user create a new group
 *
 * group GroupName Group
 * returns GroupName
 **/
exports.groupPOST = function(group) {
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
 * Remove the specified group
 * Let the user remove the specified group
 *
 * id Object Id of the group to remove
 * returns GroupName
 **/
exports.groupidDELETE = function(id) {
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
 * Retrieve the information of the specified group
 * Let the user retrieve the information of the specified group
 *
 * id Object Id of the group to retrieve the details of
 * returns GroupData
 **/
exports.groupidGET = function(id) {
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
 * Modify the specified group
 * Let the user modify the details of the specified group
 *
 * id Object Id of the group to modify
 * group GroupName Group
 * returns GroupName
 **/
exports.groupidPUT = function(id,group) {
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
 * Remove the specified user from the specified group
 * Let the user remove an user from the specified group (The user cannot remove itself if he's the only administrator of said group)
 *
 * id Object Id of the target group
 * user UserEmail User to remove from the specified group
 * returns GroupName
 **/
exports.groupidUserDELETE = function(id,user) {
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
 * Retrieve the users of the specified group
 * Let the user retrieve a list of the users of the specified group
 *
 * id Object Id of the target group
 * returns GroupUsers
 **/
exports.groupidUserGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bytes": [],
  "empty": true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add an user to the specified group
 * Let the user add another user to the specified group
 *
 * id Object Id of the target group
 * user UserEmail User
 * returns UserEmail
 **/
exports.groupidUserPOST = function(id,user) {
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
 * Modify the privileges of the specified user in the specified group
 * Let the user modify the privileges of the specified user in the specified group
 *
 * id Object Id of the target group
 * user UserPrivileges User
 * returns UserEmail
 **/
exports.groupidUserPUT = function(id,user) {
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

