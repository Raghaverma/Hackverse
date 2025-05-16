const fs = require('fs');
const path = require('path');

function readJSON(file) {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '../data', file), 'utf-8'));
}
function writeJSON(file, data) {
  fs.writeFileSync(path.join(__dirname, '../data', file), JSON.stringify(data, null, 2));
}
module.exports = { readJSON, writeJSON }; 