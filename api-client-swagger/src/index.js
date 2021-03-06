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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AuthSignin', 'model/AuthSignup', 'model/GroupData', 'model/GroupName', 'model/GroupUsers', 'model/Test', 'model/UserData', 'model/UserEmail', 'model/UserGroups', 'model/UserPassword', 'model/UserPrivileges', 'model/UserPut', 'api/AuthApi', 'api/GroupApi', 'api/TestApi', 'api/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AuthSignin'), require('./model/AuthSignup'), require('./model/GroupData'), require('./model/GroupName'), require('./model/GroupUsers'), require('./model/Test'), require('./model/UserData'), require('./model/UserEmail'), require('./model/UserGroups'), require('./model/UserPassword'), require('./model/UserPrivileges'), require('./model/UserPut'), require('./api/AuthApi'), require('./api/GroupApi'), require('./api/TestApi'), require('./api/UserApi'));
  }
}(function(ApiClient, AuthSignin, AuthSignup, GroupData, GroupName, GroupUsers, Test, UserData, UserEmail, UserGroups, UserPassword, UserPrivileges, UserPut, AuthApi, GroupApi, TestApi, UserApi) {
  'use strict';

  /**
   * An_authentication_API_implemented_in_Node_js.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var AuthenticationApi = require('index'); // See note below*.
   * var xxxSvc = new AuthenticationApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new AuthenticationApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new AuthenticationApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new AuthenticationApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AuthSignin model constructor.
     * @property {module:model/AuthSignin}
     */
    AuthSignin: AuthSignin,
    /**
     * The AuthSignup model constructor.
     * @property {module:model/AuthSignup}
     */
    AuthSignup: AuthSignup,
    /**
     * The GroupData model constructor.
     * @property {module:model/GroupData}
     */
    GroupData: GroupData,
    /**
     * The GroupName model constructor.
     * @property {module:model/GroupName}
     */
    GroupName: GroupName,
    /**
     * The GroupUsers model constructor.
     * @property {module:model/GroupUsers}
     */
    GroupUsers: GroupUsers,
    /**
     * The Test model constructor.
     * @property {module:model/Test}
     */
    Test: Test,
    /**
     * The UserData model constructor.
     * @property {module:model/UserData}
     */
    UserData: UserData,
    /**
     * The UserEmail model constructor.
     * @property {module:model/UserEmail}
     */
    UserEmail: UserEmail,
    /**
     * The UserGroups model constructor.
     * @property {module:model/UserGroups}
     */
    UserGroups: UserGroups,
    /**
     * The UserPassword model constructor.
     * @property {module:model/UserPassword}
     */
    UserPassword: UserPassword,
    /**
     * The UserPrivileges model constructor.
     * @property {module:model/UserPrivileges}
     */
    UserPrivileges: UserPrivileges,
    /**
     * The UserPut model constructor.
     * @property {module:model/UserPut}
     */
    UserPut: UserPut,
    /**
     * The AuthApi service constructor.
     * @property {module:api/AuthApi}
     */
    AuthApi: AuthApi,
    /**
     * The GroupApi service constructor.
     * @property {module:api/GroupApi}
     */
    GroupApi: GroupApi,
    /**
     * The TestApi service constructor.
     * @property {module:api/TestApi}
     */
    TestApi: TestApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi
  };

  return exports;
}));
