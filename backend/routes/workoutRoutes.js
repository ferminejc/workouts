const express = require("express");

const router = express.Router();

// Get all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "Get all workouts" });
});

// Get single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "Get all workouts" });
});

// Create a workout
router.post("/:id", (req, res) => {
  res.json({ mssg: "Create a workout" });
});

// Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete a workout" });
});

// Update a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a workout" });
});

module.exports = router;
