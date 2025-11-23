const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.createUser = async (req, res) => {
  await User.create(req.body);
  res.status(201).json({ message: "User created" });
};
