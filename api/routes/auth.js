const config = require('../libraries/config');
const user = require('../libraries/user');
const sequelize = require('../libraries/sequelize');
const models = require('../models/init-models')(sequelize);
const express = require("express");
const router = express.Router();
const { body, query, validationResult } = require('express-validator');
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
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      user.add(req.body)
        .then((data) => {
          return res.status(200).json({ email: data.email }).end();
        })
        .catch((err) => {
          return res.status(400).json({
            errors: [err]
          }).end();
        });
    }
    catch (error) {
      return res.status(500).json({
        errors: [error]
      })
    }
  }
);

router.post("/signup/verification",
  // Query param validation
  query('token').exists().isLength(36).custom(value => {
    // This is a custom validator that fails if the token does not exist or if the user is already verified
    // Otherwise, the request can get processed
    return models.users.findAll({
      where: {
        verification_token: value
      }
    })
      .then((datasets) => {
        let user = datasets[0].dataValues;
        if (user.verified == true) return Promise.reject('Wrong verification token');
      })
      .catch((err) => {
        return Promise.reject('Wrong verification token');
      });
  }),

  (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      user.verify(req.query.token)
        .then((data) => {
          return res.status(200).json({ email: data.email }).end();
        })
        .catch((err) => {
          return res.status(400).json({
            errors: [err]
          }).end();
        });
    }
    catch (error) {
      return res.status(500).json({
        errors: [error]
      })
    }
  }
);

module.exports = router;
