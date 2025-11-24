// db.js
const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // your MySQL username
  password: "Jagan@2003", // your MySQL password
  database: "school",
});
// Database connection
db.connect((err) => {
  if (err) {
    console.log(" MySQL connection failed:", err.message);
  } else {
    console.log(" Connected to MySQL Database!");
  }
});
module.exports = db;