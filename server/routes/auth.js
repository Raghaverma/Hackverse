const express = require('express');
const { readJSON, writeJSON } = require('../utils/file');
const { hashPassword, comparePassword, generateToken } = require('../utils/auth');
const router = express.Router();

router.post('/signup', (req, res) => {
  const { email, password, name } = req.body;
  const users = readJSON('users.json');
  if (users.find(u => u.email === email)) return res.status(400).json({ error: 'Email exists' });
  const user = { id: Date.now(), email, name, password: hashPassword(password), role: 'user' };
  users.push(user);
  writeJSON('users.json', users);
  res.json({ token: generateToken(user), user: { id: user.id, email: user.email, name: user.name, role: user.role } });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = readJSON('users.json');
  const user = users.find(u => u.email === email);
  if (!user || !comparePassword(password, user.password)) return res.status(401).json({ error: 'Invalid credentials' });
  res.json({ token: generateToken(user), user: { id: user.id, email: user.email, name: user.name, role: user.role } });
});

module.exports = router; 