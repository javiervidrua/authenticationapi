// Custom passport library with auth functions
const config = require('../libraries/config');
const sequelize = require('../libraries/sequelize');
const models = require('../models/init-models')(sequelize);
const passport = require('passport');
const passportLocal = require('passport-local');
const passportJWT = require('passport-jwt');
const LocalStrategy = passportLocal.Strategy;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Local strategy used in the sign in (provide email and password)
passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, function (email, password, callback) {
  models.users.findOne({
    where: { email: email }
  })
    .then(async (user) => {
      if (!user) return callback(null, false, { message: 'Invalid credentials' });
      if (!(await bcrypt.compare(password, user.password))) return callback(null, false, { message: 'Invalid credentials' });
      if (!user.verified) return callback(null, false, { message: 'User not verified' });
      return callback(null, user, { message: 'Sign in successful' });
    })
    .catch((err) => {
      return callback(err, false, { message: 'Authentication error' });
    });
}
));

// JWT used in the requests to routes that require authentication
const cookie_extractor = function (req) {
  var token = null;
  if (req && req.cookies) token = req.cookies['jwt'];
  return token;
};
passport.use(new JWTStrategy({ jwtFromRequest: ExtractJWT.fromExtractors([cookie_extractor]), secretOrKey: config.jwtSecret }, function (jwtPayload, callback) {
  models.users.findOne({
    where: { email: jwtPayload.email }
  })
    .then((user) => {
      return callback(null, user, { message: 'Authentication successful' });
    })
    .catch((err) => {
      return callback(err, false, { message: 'Invalid authentication token' });
    });
}
));

// Authorization middleware for internal routes
const authorize = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, function (error, user, info) {
    if (error || !user) return res.status(400).json({ error: info.message }).end();

    req.userEmail = user.email;
    return next();
  })(req, res, next);
};
module.exports.authorize = authorize;

// Authentication middleware for sign in
const authenticate = (req, res, next) => {
  passport.authenticate('local', { session: false }, (error, user, info) => { // https://stackoverflow.com/questions/43452896/authentication-jwt-usage-vs-session
    if (error || !user) return res.status(400).json({ error: info });

    req.login(user, { session: false }, (error) => {
      if (error) return res.status(400).json({ error }).end();

      const expireDate = new Date(86400000 + Date.now());
      const token = jwt.sign({ email: user.email, expires: expireDate }, config.jwtSecret, { expiresIn: '24h' });
      res.cookie('jwt', token, { expires: expireDate, httpOnly: true, secure: true }); // { secure: true } will only work with HTTPS

      //return res.status(200).json({ email: user.email }).end();
      req.userEmail = user.email;
      return next();
    });
  })(req, res);
};
module.exports.authenticate = authenticate;