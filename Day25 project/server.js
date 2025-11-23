require("dotenv").config(); 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const compression = require("compression");

const courseRoutes = require("./routes/courses");
const userRoutes = require("./routes/users");

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// ✅ Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the API. MongoDB is connected!");
});

// Status Route
app.get("/status", (req, res) => {
  res.send("App is live");
});

app.use("/api/courses", courseRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
