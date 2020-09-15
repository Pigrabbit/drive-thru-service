const express = require('express')
const router = express.Router()

const storeRouter = require('./store-router')
const cartRouter = require('./cart-router')
const categoryRouter = require('./category-router')

router.use('/cart', cartRouter) 
router.use('/store', storeRouter)
router.use('/category', categoryRouter)

module.exports = router
