const express = require("express");
const router = express.Router();
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const cors = require("cors");

const authRoute = require("./routes/auth");
const testRoute = require("./routes/test");

const app = express();
app.use(morgan("combined"));
app.use(express.json());
app.use(cors());

router.use("/auth", authRoute);
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use("/test", testRoute);

app.use("/api/v1", router);

const port = 3000;
app.listen(port, () => {
  console.log(`API listening on port ${port}. The documentation is available at /api/v1/docs.`);
});
