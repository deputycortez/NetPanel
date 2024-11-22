// File: backend/routes/dashboardRoutes.js

const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/dashboard", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    res.json({ username: decoded.username, role: decoded.role });
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
});

module.exports = router;
