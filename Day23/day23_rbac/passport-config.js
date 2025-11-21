const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('./models/User');

function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    try {
      const user = await User.findOne({ email: email.toLowerCase() });
      if (!user) return done(null, false, { message: 'No user with that email' });

      const match = await bcrypt.compare(password, user.password);
      if (!match) return done(null, false, { message: 'Password incorrect' });

      return done(null, user);
    } catch (err) { return done(err); }
  };

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));
  passport.serializeUser((u, done) => done(null, u.id));
  passport.deserializeUser((id, done) => {
    User.findById(id).then(u => done(null, u));
  });
}

module.exports = initialize;
