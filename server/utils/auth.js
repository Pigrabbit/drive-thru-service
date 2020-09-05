const jwt = require('jsonwebtoken')
require('dotenv').config()

function isLoggined(req, res, next) {
  const token = req.headers['x-access-token']
  if (!token) res.status(401).json({ message: 'no token' })

  const isValidToken = jwt.verify(token, process.env.JWT_SECRET)
  if (!isValidToken) res.status(401).json({ message: 'invalid token' })

  const userId = jwt.decode(token).id
  res.locals.userId = userId

  next()
}

module.exports = { isLoggined }
