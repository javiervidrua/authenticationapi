const config = require('../libraries/config');
const user = require('../libraries/user');
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

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      user.add(req.body).then((data) => {
        return res.status(200).json({ email: data.email }).end();
      })
      .catch((err) => {
        return res.status(400).json({
          errors: [{
            "value": err.value,
            "msg": err.msg,
            "param": "email",
            "location": "body"
          }]
        }).end();
      });
    }
    catch (error) {
      res.status(500).json({
        errors: [{
          "value": error,
          "msg": "An error ocurred",
          "param": null,
          "location": null
        }]
      })
    }
  });

module.exports = router;
