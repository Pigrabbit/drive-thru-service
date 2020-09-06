const express = require('express')
const router = express.Router()

const storeRouter = require('./store-router')
const cartRouter = require('./cart-router')

router.use('/cart', cartRouter) 
router.use('/store', storeRouter)

module.exports = router
