var fs = require('fs');
var https = require('https');
const config = require('./libraries/config');
const express = require("express");
const router = express.Router();
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const cors = require("cors");
const cookieParser = require('cookie-parser');

require('./libraries/passport');

const authRoute = require("./routes/auth");
const testRoute = require("./routes/test");
const userRoute = require("./routes/user");

const app = express();
app.use(morgan("combined"));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

router.use("/auth", authRoute);
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use("/test", testRoute);
router.use("/user", userRoute);

app.use("/api/v1", router);

const privateKey = fs.readFileSync('./cert/cert.key', 'utf8');
const certificate = fs.readFileSync('./cert/cert.crt', 'utf8');
const credentials = { key: privateKey, cert: certificate };
var httpsServer = https.createServer(credentials, app);

httpsServer.listen(config.port);
console.log(`API listening on port ${config.port}. The documentation is available at /api/v1/docs.`);
