const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET = 'supersecret'; // Use env var in production

function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}
function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}
function generateToken(user) {
  return jwt.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: '7d' });
}
function verifyToken(token) {
  return jwt.verify(token, SECRET);
}
module.exports = { hashPassword, comparePassword, generateToken, verifyToken }; 