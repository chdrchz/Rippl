const express = require("express");

const app = express();
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
