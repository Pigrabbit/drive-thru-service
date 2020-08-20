const pool = require('../utils/mysql')
const bcrypt = require('bcrypt')
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
      message: 'register success'
    })
  } catch (err) {
    next(err)
  } finally {
    connection.release()
  }
}

module.exports = {
  userRegister,
}
