const express = require("express");
const app = express();
const router = express.Router();
const sequelize = require('./db/db');
const userRoutes = require('./routes/users');

// Middleware
app.use(express.json()); // For parsing JSON bodies
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded bodies

// Test route
router.get("/", (req, res) => {
  res.send("hello world");
});

// Routes
app.use("/", router);
app.use("/api/users", userRoutes); // Mount user routes at /api/users

// Database connection and server start
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');
    
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  } catch (error) {
    console.error('Unable to connect to database:', error);
  }
}

startServer();
