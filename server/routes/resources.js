const express = require('express');
const { readJSON, writeJSON } = require('../utils/file');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(readJSON('resources.json'));
});

router.post('/', (req, res) => {
  const resources = readJSON('resources.json');
  const resource = { id: Date.now(), ...req.body };
  resources.push(resource);
  writeJSON('resources.json', resources);
  res.status(201).json(resource);
});

module.exports = router; 