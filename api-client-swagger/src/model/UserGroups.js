/*
 * Authentication API
 * An authentication API implemented in Node.js
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.26
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GroupData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GroupData'));
  } else {
    // Browser globals (root is window)
    if (!root.AuthenticationApi) {
      root.AuthenticationApi = {};
    }
    root.AuthenticationApi.UserGroups = factory(root.AuthenticationApi.ApiClient, root.AuthenticationApi.GroupData);
  }
}(this, function(ApiClient, GroupData) {
  'use strict';

  /**
   * The UserGroups model module.
   * @module model/UserGroups
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserGroups</code>.
   * @alias module:model/UserGroups
   * @class
   * @extends Array
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UserGroups</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserGroups} obj Optional instance to populate.
   * @return {module:model/UserGroups} The populated <code>UserGroups</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'GroupData');
    }
    return obj;
  }

  Object.setPrototypeOf(exports.prototype, new Array());

  return exports;

}));
