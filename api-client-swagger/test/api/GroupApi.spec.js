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
    instance = new AuthenticationApi.GroupApi();
  });

  describe('(package)', function() {
    describe('GroupApi', function() {
      describe('groupGet', function() {
        it('should call groupGet successfully', function(done) {
          // TODO: uncomment groupGet call and complete the assertions
          /*

          instance.groupGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AuthenticationApi.UserGroups);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('groupPost', function() {
        it('should call groupPost successfully', function(done) {
          // TODO: uncomment, update parameter values for groupPost call and complete the assertions
          /*
          var group = new AuthenticationApi.GroupName();
          group.name = "";

          instance.groupPost(group, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AuthenticationApi.GroupName);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('groupidDelete', function() {
        it('should call groupidDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for groupidDelete call and complete the assertions
          /*
          var id = null;

          instance.groupidDelete(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AuthenticationApi.GroupName);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('groupidGet', function() {
        it('should call groupidGet successfully', function(done) {
          // TODO: uncomment, update parameter values for groupidGet call and complete the assertions
          /*
          var id = null;

          instance.groupidGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AuthenticationApi.GroupData);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.isAdmin).to.be.a('boolean');
            expect(data.isAdmin).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('groupidPut', function() {
        it('should call groupidPut successfully', function(done) {
          // TODO: uncomment, update parameter values for groupidPut call and complete the assertions
          /*
          var id = null;
          var group = new AuthenticationApi.GroupName();
          group.name = "";

          instance.groupidPut(id, group, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AuthenticationApi.GroupName);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('groupidUserDelete', function() {
        it('should call groupidUserDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for groupidUserDelete call and complete the assertions
          /*
          var id = null;
          var user = new AuthenticationApi.UserEmail();
          user.email = "";

          instance.groupidUserDelete(id, user, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AuthenticationApi.GroupName);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('groupidUserGet', function() {
        it('should call groupidUserGet successfully', function(done) {
          // TODO: uncomment, update parameter values for groupidUserGet call and complete the assertions
          /*
          var id = null;

          instance.groupidUserGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AuthenticationApi.GroupUsers);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('groupidUserPost', function() {
        it('should call groupidUserPost successfully', function(done) {
          // TODO: uncomment, update parameter values for groupidUserPost call and complete the assertions
          /*
          var id = null;
          var user = new AuthenticationApi.UserEmail();
          user.email = "";

          instance.groupidUserPost(id, user, function(error, data, response) {
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
      describe('groupidUserPut', function() {
        it('should call groupidUserPut successfully', function(done) {
          // TODO: uncomment, update parameter values for groupidUserPut call and complete the assertions
          /*
          var id = null;
          var user = new AuthenticationApi.UserPrivileges();
          user.email = "";
          user.isAdmin = false;

          instance.groupidUserPut(id, user, function(error, data, response) {
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