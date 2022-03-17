'use strict';


/**
 * Test that the API can connect to the database
 * Test that the API can connect to the database
 *
 * returns Test
 **/
exports.testDbGET = function() {
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

