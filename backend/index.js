const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/complaintDB")
.then(() => console.log("MongoDB Connected"));

/*================= USER MODEL ================= */

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model("users", UserSchema);

/* ================= REGISTER ================= */

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error registering user");
  }
});

/* ================= LOGIN ================= */

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (user) {
      res.json(user);
    } else {
      res.json({ message: "Invalid Credentials" });
    }

  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

/* ================= COMPLAINT ================= */

// Complaint Schema
const Complaint = mongoose.model("complaints", new mongoose.Schema({
  comment: String,
  status: { type: String, default: "Pending" }
}));

// SAVE complaint
app.post("/complaint", async (req, res) => {
  try {
    const newComplaint = new Complaint(req.body);
    const saved = await newComplaint.save();

    res.json({
      message: "Saved",
      id: saved._id   
    });

  } catch (err) {
    res.status(500).send(err);
  }
});

// GET complaint by ID
app.get("/status/:id", async (req, res) => {
  const complaint = await Complaint.findById(req.params.id);
  res.json(complaint);
});
/* ================= SERVE FRONTEND ================= */

app.use(express.static(path.join(__dirname, "build")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
