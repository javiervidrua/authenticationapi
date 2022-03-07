const config = require('./libraries/config');
const express = require("express");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const cors = require("cors");

const authRoute = require("./routes/auth");

const app = express();
app.use(morgan("combined"));
app.use(cors());

app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1", authRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`API listening on port ${port}. The documentation is available at /api/v1/docs.`);
});
