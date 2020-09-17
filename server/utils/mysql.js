const mysql = require("mysql2/promise")
const { FILE_PATH } = require('../config/config')

require('dotenv').config({
  path: (process.env.NODE_ENV === 'dev') ? FILE_PATH.env_dev : FILE_PATH.env_prod
})

const Pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306,
    timezone: 'UTC+9'
});

module.exports = Pool;