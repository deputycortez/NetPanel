// File: backend/models/userModel.js
const bcrypt = require("bcrypt");

const users = [
  { username: "admin", password: bcrypt.hashSync("admin123", 10), role: "admin" },
  { username: "user", password: bcrypt.hashSync("user123", 10), role: "user" },
];

module.exports = users;
