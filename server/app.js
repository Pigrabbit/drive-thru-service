const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('dotenv').config()

const apiRouter = require('./routes/api-router')
const authRouter = require('./routes/auth-router')
app.use('/api', apiRouter)
app.use('/auth', authRouter)

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
