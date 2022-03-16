const group = require('../libraries/group');
const sequelize = require('../libraries/sequelize');
const models = require('../models/init-models')(sequelize);
const express = require("express");
const router = express.Router();
const { body, query, validationResult } = require('express-validator');
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

// router.put("/",
  // // Body validation
  // body("full_name").isLength({ min: 5, max: 50 }),
  // body("address").isLength({ min: 5, max: 100 }),
  // body("city").isLength({ min: 1, max: 50 }),
  // body("postal").isLength({ min: 5, max: 7 }),
  // body("phone").isMobilePhone(),

//   passport.authorize,

//   (req, res) => {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       // Sanitize the user input
//       let userData = {};
//       if (req.body.full_name) userData.full_name = req.body.full_name;
//       if (req.body.address) userData.address = req.body.address;
//       if (req.body.city) userData.city = req.body.city;
//       if (req.body.postal) userData.postal = req.body.postal;
//       if (req.body.phone) userData.phone = req.body.phone;

//       user.update(req.userEmail, userData)
//         .then((user) => {
//           return res.status(200).json(user).end();
//         })
//         .catch((err) => {
//           return res.status(400).json({
//             errors: [err]
//           }).end();
//         });
//     }
//     catch (error) {
//       return res.status(500).json({
//         errors: [error]
//       })
//     }
//   }
// );

// router.delete("/",
//   // Body validation
//   body("password").isStrongPassword(),

//   passport.authorize,

//   (req, res) => {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       user.remove(req.userEmail, req.body.password)
//         .then((user) => {
//           res.clearCookie('jwt');
//           return res.status(200).json(user).end();
//         })
//         .catch((err) => {
//           return res.status(400).json({
//             errors: [err]
//           }).end();
//         });
//     }
//     catch (error) {
//       return res.status(500).json({
//         errors: [error]
//       })
//     }
//   }
// );

module.exports = router;
