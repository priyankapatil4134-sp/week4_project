const express = require("express");

const app = express();

app.use(express.json());

let tasks = [
  {
    id: 1,
    title: "Learn Node.js",
    completed: false
  },
  {
    id: 2,
    title: "Learn Express",
    completed: false
  }
];

// GET - Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST - Add new task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
  };

  tasks.push(newTask);

  res.json(newTask);
});

// PUT - Toggle task completed status
app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find(task => task.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  task.completed = !task.completed;

  res.json(task);
});

// DELETE - Delete task
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  tasks = tasks.filter(task => task.id !== id);

  res.json({
    message: "Task deleted"
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});