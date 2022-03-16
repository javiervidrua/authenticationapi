const group = require('../libraries/group');
const sequelize = require('../libraries/sequelize');
const models = require('../models/init-models')(sequelize);
const express = require("express");
const router = express.Router();
const { body, param, validationResult } = require('express-validator');
const passport = require('../libraries/passport');

router.get("/",
  passport.authorize,

  (req, res) => {
    try {
      group.get(req.userEmail)
        .then((groups) => {
          return res.status(200).json(groups).end();
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

router.post("/",
  // Body validation
  body("name").isLength({ min: 5, max: 50 }),

  passport.authorize,

  (req, res) => {
    try {
      group.add(req.userEmail, req.body.name)
        .then((group) => {
          return res.status(200).json({ name: group.name }).end();
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

router.get("/:id",
  passport.authorize,

  (req, res) => {
    try {
      const { id } = req.params;

      group.get_by_id(req.userEmail, id)
        .then((group) => {
          return res.status(200).json(group).end();
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

router.put("/:id",
  // Param and body validation
  param("id").isInt(),
  body("name").isLength({ min: 5, max: 50 }),

  passport.authorize,

  (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { id } = req.params;

      group.update(req.userEmail, id, req.body.name)
        .then((group) => {
          return res.status(200).json({ name: group.name }).end();
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

router.delete("/:id",
  // Body validation
  param("id").isInt(),

  passport.authorize,

  (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { id } = req.params;

      group.remove(req.userEmail, id)
        .then((group) => {
          return res.status(200).json({ name: group.name}).end();
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
