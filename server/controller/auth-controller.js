const pool = require('../utils/mysql')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

async function userRegister(req, res, next) {
  const { email, name, password } = req.body
  if (!email || !name || !password) {
    next(new Error('Bad Request'))
  }
  // TODO
  // generate hashed pwd with bcrypt
  // save new User to db(User table)
  const salt = parseInt(process.env.PWD_SALT)
  const hashedPassword = await bcrypt.hash(password, salt)
  const connection = await pool.getConnection()
  try {
    const query = 'INSERT INTO test.user (name, email, password) VALUES (?,?,?)'
    await connection.query(query, [name, email, hashedPassword])
    res.status(200).json({
      message: 'register success',
    })
  } catch (err) {
    next(err)
  } finally {
    connection.release()
  }
}
async function login(req, res, next) {
  const { email, password } = req.body
  if (!email || !password) {
    next(new Error('Bad Request'))
  }
  const connection = await pool.getConnection()
  try {
    const query = 'SELECT id, email, password FROM test.user WHERE email=?'
    const [users] = await connection.query(query, [email])
    if (!users) next(new Error('Not registered'))

    const user = users[0]
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) next(new Error('Invalid Password'))

    const payload = { id: user.id }
    const token = await jwt.sign(payload, process.env.JWT_SECRET)
    res.status(200).json({ token })
  } catch (err) {
    next(err)
  } finally {
    connection.release()
  }
}
module.exports = {
  userRegister,
  login,
}
