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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AuthenticationApi) {
      root.AuthenticationApi = {};
    }
    root.AuthenticationApi.AuthSignup = factory(root.AuthenticationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AuthSignup model module.
   * @module model/AuthSignup
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AuthSignup</code>.
   * @alias module:model/AuthSignup
   * @class
   * @param email {String} 
   * @param password {String} 
   * @param fullName {String} 
   */
  var exports = function(email, password, fullName) {
    this.email = email;
    this.password = password;
    this.fullName = fullName;
  };

  /**
   * Constructs a <code>AuthSignup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthSignup} obj Optional instance to populate.
   * @return {module:model/AuthSignup} The populated <code>AuthSignup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('full_name'))
        obj.fullName = ApiClient.convertToType(data['full_name'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('postal'))
        obj.postal = ApiClient.convertToType(data['postal'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {String} password
   */
  exports.prototype.password = undefined;

  /**
   * @member {String} fullName
   */
  exports.prototype.fullName = undefined;

  /**
   * @member {String} address
   */
  exports.prototype.address = undefined;

  /**
   * @member {String} city
   */
  exports.prototype.city = undefined;

  /**
   * @member {String} postal
   */
  exports.prototype.postal = undefined;

  /**
   * @member {String} phone
   */
  exports.prototype.phone = undefined;


  return exports;

}));