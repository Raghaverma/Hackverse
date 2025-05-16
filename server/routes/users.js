const express = require('express');
const { readJSON, writeJSON } = require('../utils/file');
const router = express.Router();

router.get('/', (req, res) => {
  const users = readJSON('users.json');
  res.json(users.map(u => ({ id: u.id, email: u.email, name: u.name, role: u.role })));
});

// Add more endpoints as needed (update, delete, etc.)

module.exports = router; 