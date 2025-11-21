require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  const email = "admin@example.com";

  const exists = await User.findOne({ email });
  if (exists) { console.log("Admin exists"); process.exit(0); }

  const hashed = await bcrypt.hash("Admin@123", 10);
  await new User({ name:"Admin", email, password:hashed, role:"admin" }).save();

  console.log("Admin created");
  process.exit(0);
})();
