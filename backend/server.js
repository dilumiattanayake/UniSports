const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check / root route
app.get("/", (req, res) => {
  res.json({ message: "UniSports API is running" });
});

// Configure port: default to 5005 as requested
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`UniSports backend server running on port ${PORT}`);
});

