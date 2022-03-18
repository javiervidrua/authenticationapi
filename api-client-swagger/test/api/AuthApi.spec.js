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

  beforeEach(function() {
    instance = new AuthenticationApi.AuthApi();
  });

  describe('(package)', function() {
    describe('AuthApi', function() {
      describe('authRecoverpasswordPost', function() {
        it('should call authRecoverpasswordPost successfully', function(done) {
          // TODO: uncomment, update parameter values for authRecoverpasswordPost call and complete the assertions
          /*
          var email = new AuthenticationApi.UserEmail();
          email.email = "";

          instance.authRecoverpasswordPost(email, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AuthenticationApi.UserEmail);
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('authSetpasswordPost', function() {
        it('should call authSetpasswordPost successfully', function(done) {
          // TODO: uncomment, update parameter values for authSetpasswordPost call and complete the assertions
          /*
          var token = null;
          var password = new AuthenticationApi.UserPassword();
          password.password = "";

          instance.authSetpasswordPost(token, password, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AuthenticationApi.UserEmail);
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('authSigninPost', function() {
        it('should call authSigninPost successfully', function(done) {
          // TODO: uncomment, update parameter values for authSigninPost call and complete the assertions
          /*
          var user = new AuthenticationApi.AuthSignin();
          user.email = "";
          user.password = "";

          instance.authSigninPost(user, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AuthenticationApi.UserEmail);
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('authSignoutPost', function() {
        it('should call authSignoutPost successfully', function(done) {
          // TODO: uncomment authSignoutPost call and complete the assertions
          /*

          instance.authSignoutPost(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AuthenticationApi.UserEmail);
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('authSignupPost', function() {
        it('should call authSignupPost successfully', function(done) {
          // TODO: uncomment, update parameter values for authSignupPost call and complete the assertions
          /*
          var user = new AuthenticationApi.AuthSignup();
          user.email = "";
          user.password = "";
          user.fullName = "";
          user.address = "";
          user.city = "";
          user.postal = "";
          user.phone = "";

          instance.authSignupPost(user, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AuthenticationApi.UserEmail);
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('authSignupVerifyGet', function() {
        it('should call authSignupVerifyGet successfully', function(done) {
          // TODO: uncomment, update parameter values for authSignupVerifyGet call and complete the assertions
          /*
          var token = null;

          instance.authSignupVerifyGet(token, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AuthenticationApi.UserEmail);
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));