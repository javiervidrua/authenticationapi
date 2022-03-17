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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AuthenticationApi);
  }
}(this, function(expect, AuthenticationApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('UserPrivileges', function() {
      beforeEach(function() {
        instance = new AuthenticationApi.UserPrivileges();
      });

      it('should create an instance of UserPrivileges', function() {
        // TODO: update the code to test UserPrivileges
        expect(instance).to.be.a(AuthenticationApi.UserPrivileges);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property isAdmin (base name: "is_admin")', function() {
        // TODO: update the code to test the property isAdmin
        expect(instance).to.have.property('isAdmin');
        // expect(instance.isAdmin).to.be(expectedValueLiteral);
      });

    });
  });

}));
