const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const { logFormat, FILE_PATH } = require('./config/config')

require('dotenv').config({
  path: process.env.NODE_ENV === 'dev' ? FILE_PATH.env_dev : FILE_PATH.env_prod,
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(cors())
app.use(morgan(logFormat))

const apiRouter = require('./routes/api-router')
// const authRouter = require('./routes/auth-router')
// const {isLoggined} = require('./utils/auth')
// app.use('/auth', authRouter)

app.use('/api', apiRouter)

app.use('/', (req, res, next) => {
  res.sendFile('public/index.html', { root: __dirname })
})

app.use((err, req, res, next) => {
  console.error(err)
  res.json({ message: err })
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running on ${process.env.NODE_ENV} mode, PORT ${process.env.PORT}`)
})
