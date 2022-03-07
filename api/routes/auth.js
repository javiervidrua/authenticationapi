const config = require('../libraries/config');
const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwtSecret = config.jwtSecret;

router.get("/test", (req, res) => {
  res.status(200).json({ status: 200 }).end();
});

module.exports = router;
