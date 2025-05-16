const express = require('express');
const { readJSON, writeJSON } = require('../utils/file');
const router = express.Router();

// GET: Fetch all teams
router.get('/', (req, res) => {
  res.json(readJSON('teams.json'));
});

// POST: Register a new team
router.post('/', (req, res) => {
  const teams = readJSON('teams.json');
  const team = { id: Date.now(), ...req.body };
  teams.push(team);
  writeJSON('teams.json', teams);
  res.status(201).json(team);
});

module.exports = router;
