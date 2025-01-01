const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./api/users");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
