require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const initializePassport = require('./passport-config');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

// -------- EJS + Layouts --------
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layout');              // layout.ejs
app.set('views', path.join(__dirname, 'views'));

// Static files (css, js, images)
app.use(express.static(path.join(__dirname, 'public')));

// -------- Body Parser --------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// -------- Database Connect --------
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// -------- Session Config --------
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      collectionName: "sessions",
      ttl: 14 * 24 * 60 * 60,
    }),
    cookie: { maxAge: 1000 * 60 * 60 }, // 1 hour
  })
);

// -------- Passport Auth --------
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

// Make user available to all views (important)
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// -------- Routes --------
app.use('/', authRoutes);

// -------- Home Page --------
app.get('/', (req, res) => {
  res.render('index');     // user automatically available from res.locals.user
});

// -------- Start Server --------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
