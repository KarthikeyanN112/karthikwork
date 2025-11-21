const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User');
const { ensureAuthenticated, ensureAdmin } = require('../utils/authMiddleware');

// GET Register Page
router.get('/register', (req, res) => {
  res.render('register', {
    errors: [],
    success: null,
    name: "",
    email: ""
  });
});

// POST Register Handler
router.post('/register', async (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  // Validation
  if (!name || !email || !password || !password2)
    errors.push("All fields required");

  if (password !== password2)
    errors.push("Passwords do not match");

  if (password.length < 6)
    errors.push("Password must be at least 6 characters long");

  // If validation errors → re-render with data
  if (errors.length > 0) {
    return res.render("register", {
      errors,
      success: null,
      name,
      email
    });
  }

  try {
    // Check existing user
    const exist = await User.findOne({ email });
    if (exist) {
      return res.render("register", {
        errors: ["Email already used"],
        success: null,
        name,
        email
      });
    }

    // Hash password + save user
    const hashed = await bcrypt.hash(password, 10);
    await new User({ name, email, password: hashed }).save();

    // Show success message
    res.render("register", {
      errors: [],
      success: `Registration successful for ${name}!`,
      name: "",
      email: ""
    });
  } catch (err) {
    res.render("register", {
      errors: ["Server error"],
      success: null,
      name,
      email
    });
  }
});

// GET Login Page
router.get('/login', (req, res) => {
  res.render('login', { error: null });
});

// POST Login Handler
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (!user) {
      return res.render("login", { error: info.message });
    }

    req.logIn(user, (err) => {
      if (err) return next(err);
      res.redirect("/dashboard");
    });
  })(req, res, next);
});

// Logout
router.post('/logout', (req, res) => {
  req.logout(() => res.redirect('/'));
});

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.render('dashboard', { user: req.user });
});

// Admin Page
router.get('/admin', ensureAuthenticated, ensureAdmin, (req, res) => {
  res.render('admin', { user: req.user });
});

module.exports = router;
