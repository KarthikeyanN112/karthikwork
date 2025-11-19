const express = require("express");
const morgan = require("morgan");

const logger = require("./middlewares/logger");
const validateStudent = require("./middlewares/studentValidator");

const app = express();
const PORT = 3000;

// ======================================
// Built-in Body Parsing Middlewares
// ======================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ======================================
// Custom Logging Middleware
// ======================================
app.use(logger);

// ======================================
// Morgan Logging Middleware
// ======================================
app.use(morgan("dev"));

// ======================================
// Routes
// ======================================

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to SkillTrack Academy API",
    endpoints: ["/students", "/students (POST)"]
  });
});

// Get Students
app.get("/students", (req, res) => {
  const students = [
    { id: 1, name: "Karthik", progress: "80%" },
    { id: 2, name: "Ram", progress: "92%" }
  ];

  res.json({ students });
});

// Add Student (with validation)
app.post("/students", validateStudent, (req, res) => {
  const { name, email } = req.body;

  const student = {
    id: Date.now(),
    name,
    email
  };

  // pretend database save

  res.status(201).json({
    message: "Student added successfully!",
    student
  });
});

// Simulate an error to test error middleware
app.get("/cause-error", (req, res) => {
  throw new Error("Test error for debugging!");
});

// ======================================
// 404 Middleware
// ======================================
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

// ======================================
// Global Error Handling Middleware
// ======================================
app.use((err, req, res, next) => {
  console.error("ERROR:", err.message);

  res.status(500).json({
    message: "Internal Server Error",
    error: err.message
  });
});

// ======================================
// Start Server
// ======================================
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
