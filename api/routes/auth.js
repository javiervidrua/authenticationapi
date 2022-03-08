const config = require('../libraries/config');
const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const jwtSecret = config.jwtSecret;

router.post("/signup",
  // Body validation
  body("email").isEmail().normalizeEmail(),
  body("password").isStrongPassword(),
  body("full_name").isLength({ min: 5, max: 50 }),
  body("address").isLength({ min: 5, max: 100 }),
  body("city").isLength({ min: 1, max: 50 }),
  body("postal").isLength({ min: 5, max: 7 }),
  body("phone").isMobilePhone(),
  
  (req, res) => {
    // Validate the body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return res.status(200).json(req.body).end();
  });

module.exports = router;
