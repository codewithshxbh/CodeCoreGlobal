const jwt = require('jsonwebtoken');
const SECRET = 'mysecretkey';

function generateToken(user) {
  return jwt.sign(user, SECRET, { expiresIn: '1h' });
}

function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = { generateToken, authenticate };
