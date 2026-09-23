const express = require("express");

const app = express();

const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());

app.use("/tasks", taskRoutes);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});