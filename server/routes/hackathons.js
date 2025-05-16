const express = require('express');
const { readJSON, writeJSON } = require('../utils/file');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(readJSON('hackathons.json'));
});

router.post('/', (req, res) => {
  const hackathons = readJSON('hackathons.json');
  const hackathon = { id: Date.now(), ...req.body };
  hackathons.push(hackathon);
  writeJSON('hackathons.json', hackathons);
  res.status(201).json(hackathon);
});

module.exports = router; 