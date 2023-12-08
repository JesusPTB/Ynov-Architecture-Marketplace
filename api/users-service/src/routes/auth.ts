import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
import passport from 'passport';

const LocalStrategy = require('passport-local');

import {User} from "../Models/user";

const router = express.Router();

/* Passport configuration */
passport.use(new LocalStrategy(
  function (username: string, password: string, cb: any) {
    User.findOne({where: {email: username}}).then((user: any) => {
      if (!user) {
        return cb(null, false, {message: 'Incorrect username or password.'});
      }
      bcrypt.compare(password, user.password).then((result: any) => {
        if (result) {
          return cb(null, user);
        } else {
          return cb(null, false, {message: 'Incorrect username or password.'});
        }
      }).catch((err: any) => {
        return cb(err);
      });

    }).catch((err: any) => {
      return cb(err);
    });
  }
));

/* Route to log in returning a JWT */
router.post('/login', function (req, res, next) {
  passport.authenticate('local', {session: false}, function (err: any, user: any, info: any) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json(info);
    }

    req.login(user, {session: false}, function (err: any) {
      if (err) {
        res.send(err);
      }
      // generate a signed son web token with the contents of user object and return it in the response
      console.log(process.env.JWT_SECRET)
      const token = jwt.sign({
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      }, process.env.JWT_SECRET!);

      // Set the token as a HttpOnly cookie
      console.log(token)
      res.cookie('jwt', token, {httpOnly: true, secure: true, sameSite: 'none'});
      console.log('cookie created successfully');

      return res.json({message: "Logged in successfully"});
    });
  })(req, res, next);
});

/* Route to create a new user */
router.post('/signup', function (req, res) {
  if (!req.body.email || !req.body.password || !req.body.firstname || !req.body.lastname) {
    res.status(400).send('Missing parameters');
  }
  bcrypt
    .hash(req.body.password, 10)
    .then(hash => {
      User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hash,
        status: 'active',
        updatedAt: new Date(),
        createdAt: new Date()
      }).then((user: any) => {
        res.json(
          "User created successfully!"
        );
      }).catch((err: any) => {
        console.log(err);
        res.json(err);
      });
    })
    .catch(err => console.error(err.message));
});

/* Route to verify a JWT */
router.get('/verify/:token', function (req, res) {
    const token = req.body.token;
    jwt.verify(token, process.env.JWT_SECRET!, function (err: any, decoded: any) {
      if (err) {
        res.json(err);
      }
      res.json(decoded);
    });
  }
);
module.exports = router;
