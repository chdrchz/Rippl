const express = require("express");
const router = express.Router();
const pool = require("../db/config");

// Get all users in users table
router.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
