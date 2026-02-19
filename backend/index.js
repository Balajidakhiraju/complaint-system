const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");   

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/complaintDB")
.then(() => console.log("MongoDB Connected"));

app.post("/complaint", async (req, res) => {
  const Complaint = mongoose.model("complaints", new mongoose.Schema({
    comment: String,
    status: { type: String, default: "Pending" }
  }));

  const newComplaint = new Complaint(req.body);
  await newComplaint.save();
  res.send("Complaint Saved");
});

app.use(express.static(path.join(__dirname, "build")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
