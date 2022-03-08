const express = require("express");
const router = express.Router();
const sequelize = require("../libraries/sequelize");

router.get("/db", async (req, res) => {
  // Just a database connection test
  try {
    await sequelize.authenticate();
    res.status(200).json({ status: 200 }).end();
  } catch (error) {
    res.status(500).json({ status: 500, error: error }).end();
  }
});

module.exports = router;
