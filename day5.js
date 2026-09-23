const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const tasks = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Learn Node.js" },
  { id: 3, title: "Learn Express" }
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(3000, () => {
  console.log("Day 5 API running on port 3000");
});