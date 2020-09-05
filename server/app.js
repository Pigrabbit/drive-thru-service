const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('combined'))


const apiRouter = require('./routes/api-router')
// const authRouter = require('./routes/auth-router')
// const {isLoggined} = require('./utils/auth')
// app.use('/auth', authRouter)

app.use('/api', apiRouter)

app.use('/', (req, res, next) => {
  res.json({ message: 'hello world' })
})

app.use((err, req, res, next) => {
  console.log(err)
  res.json({ message: err })
})

app.listen(process.env.PORT || 3000, () => {
  console.log('running!!!')
})
