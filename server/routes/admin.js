const express = require('express');
const { readJSON } = require('../utils/file');
const router = express.Router();

router.get('/analytics', (req, res) => {
  res.json({
    users: readJSON('users.json').length,
    teams: readJSON('teams.json').length,
    hackathons: readJSON('hackathons.json').length,
    submissions: readJSON('submissions.json').length,
  });
});

router.get('/logs', (req, res) => {
  res.json(readJSON('logs.json'));
});

module.exports = router; 