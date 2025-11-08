// server.js
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const path = require("path");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Atlas connection
const uri = "mongodb+srv://karthikdbuser:dbuser@cluster0.7bzg2oa.mongodb.net/";
const client = new MongoClient(uri);
let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db("collegeDB"); // database name
    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("❌ Connection failed:", err);
  }
}
connectDB();


// -------------------- CRUD APIs -------------------- //

// Create (Insert one student)
app.post("/students", async (req, res) => {
  const result = await db.collection("students").insertOne(req.body);
  res.send(result);
});

// Read (Fetch all or search by name)
app.get("/students", async (req, res) => {
  const name = req.query.name;
  let query = {};
  if (name) query.name = { $regex: name, $options: "i" };
  const students = await db.collection("students").find(query).toArray();
  res.send(students);
});

// Update (Edit a student)
app.put("/students/:id", async (req, res) => {
  const result = await db.collection("students").updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.send(result);
});

// Delete (Remove a student)
app.delete("/students/:id", async (req, res) => {
  const result = await db.collection("students").deleteOne({
    _id: new ObjectId(req.params.id)
  });
  res.send(result);
});

// ---------------------------------------------------- //

process.on("SIGINT", async () => {
  await client.close();
  console.log("🔒 MongoDB connection closed");
  process.exit(0);
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
