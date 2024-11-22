// File: backend/controllers/authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = require("../models/userModel");

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      { username: user.username, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    return res.json({ token, role: user.role });
  }

  res.status(401).json({ message: "Invalid username or password" });
};

module.exports = { login };
