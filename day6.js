const express = require("express");

const app = express();

app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// Tasks array
let tasks = [
    { id: 1, title: "Learn Node.js", complete: false },
    { id: 2, title: "Learn Express", complete: false }
];

// GET /tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// POST /tasks
app.post("/tasks", (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        complete: false
    };

    tasks.push(newTask);

    res.json(newTask);
});

// PUT /tasks/:id
app.put("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    task.complete = !task.complete;

    res.json(task);
});

// DELETE /tasks/:id
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({ message: "Task not found" });
    }

    const deletedTask = tasks.splice(taskIndex, 1);

    res.json(deletedTask);
});

// Server
app.listen(3000, () => {
    console.log("Task Tracker API running on http://localhost:3000");
});