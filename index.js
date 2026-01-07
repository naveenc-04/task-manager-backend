require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB Error:", err));

// Import Task model
const Task = require("./models/Task");

// ROUTES
app.get("/", (req, res) => {
  res.send("Task Manager Backend Running...");
});

// Get all tasks
app.get("/api/tasks", async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
});

// Add new task
app.post("/api/tasks", async (req, res) => {
  try {
    const { title, description, priority, status, dueDate } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const task = new Task({
      title,
      description,
      priority,
      status,
      dueDate,
    });

    await task.save();

    res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Update task
app.put("/api/tasks/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json({
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Delete task
app.delete("/api/tasks/:id", async (req, res) => {
  try {
    const deleted = await Task.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
