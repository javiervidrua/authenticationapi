const swagger = require('swagger-ui-express');
const jsdoc = require('swagger-jsdoc');

let options = {
    definition: {
        info: {
            description: "An authentication API implemented in Node.js",
            version: "1.0.0",
            title: "authenticationapi",
            contact: {
                email: "67796321+javiervidrua@users.noreply.github.com"
            }
        }
    },
    apis: ['./routes/*.js']
}
const specs = jsdoc(options);
module.exports = swagger.setup(specs);