const express = require('express');
const { readJSON, writeJSON } = require('../utils/file');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(readJSON('submissions.json'));
});

router.post('/', (req, res) => {
  const submissions = readJSON('submissions.json');
  const submission = { id: Date.now(), ...req.body };
  submissions.push(submission);
  writeJSON('submissions.json', submissions);
  res.status(201).json(submission);
});

module.exports = router; 