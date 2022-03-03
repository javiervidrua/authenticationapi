const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerConf = require('./swagger.conf.js');
const cors = require('cors');

const app = express();
app.use(morgan('combined'));

app.use('/docs', swaggerUi.serve, swaggerConf);

const port = 3000;
app.listen(port, ()=> {
    console.log(`API listening on port ${port}. Docs available at /docs.`)
})