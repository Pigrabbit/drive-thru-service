const express = require('express')
const router = express.Router()
const { userRegister } = require('../controller/auth-controller')
router.post('/register', userRegister)

module.exports = router
