const Course = require("../models/Course");

exports.getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

exports.createCourse = async (req, res) => {
  await Course.create(req.body);
  res.status(201).json({ message: "Course created" });
};
