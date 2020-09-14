const express = require("express");
const router = express.Router();

const db = require('../utils/mysql')
const CartController = require('../controller/cart-controller')
const CartService = require('../service/cart-service')
const CartRepository = require('../repository/cart-repository')

const cartController = new CartController(CartService, CartRepository, db)

// Get Cart Data by Id
router.get('/:cartId', cartController.getCart.bind(cartController))

// Put new product into the Cart
router.post('/', cartController.postCart.bind(cartController))

// Update quantity of product in cart
router.put('/:cartId/:productId', cartController.updateCart.bind(cartController))

// Remove product in the cart
router.delete('/:cartId/:productId', cartController.deleteCart.bind(cartController))

module.exports = router;
