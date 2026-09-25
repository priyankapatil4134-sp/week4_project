const express = require("express");

const app = express();

app.use(express.json());

// Query String
app.get("/search", (req, res) => {
  const name = req.query.name;

  res.json({
    message: "Search successful",
    name: name
  });
});

// Route Params
app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    message: "User found successfully",
    userId: id
  });
});

// Request Body
app.post("/users", (req, res) => {
  const { name, age } = req.body;

  res.json({
    message: "User created successfully",
    name: name,
    age: age
  });
});

// PUT
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const { name, age } = req.body;

  res.json({
    message: "User updated successfully",
    userId: id,
    name: name,
    age: age
  });
});

// DELETE
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    message: "User deleted successfully",
    userId: id
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});