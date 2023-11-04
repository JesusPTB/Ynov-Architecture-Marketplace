import passport from 'passport';
import * as passportLocal from 'passport-local';
const LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy(function verify(username: String, password: String, cb: any) {
  db.get('SELECT * FROM users WHERE username = ?', [ username ], function(err: any, user: { salt: any; hashed_password: any; }) {
    if (err) { return cb(err); }
    if (!user) { return cb(null, false, { message: 'Incorrect username or password.' }); }

    crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', function(err: any, hashedPassword: any) {
      if (err) { return cb(err); }
      if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
        return cb(null, false, { message: 'Incorrect username or password.' });
      }
      return cb(null, user);
    });
  });
}));
