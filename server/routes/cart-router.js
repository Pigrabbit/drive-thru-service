const express = require("express");
const router = express.Router();

const db = require('../utils/mysql')
const CartController = require('../controller/cart-controller')
const CartService = require('../service/cart-service')
const CartRepository = require('../repository/cart-repository')

const cartController = new CartController(CartService, CartRepository, db)

// Get Cart Data by Id
router.get('/:cart_id', cartController.getOneCart.bind(cartController))
// Create new Cart
router.post('/:cart_id', cartController.createCart.bind(cartController))
// Update quantity of product in cart
router.put('/:cart_id/:product_id', cartController.updateCartProductQuantity.bind(cartController))
// remove product in the cart
router.delete('/:cart_id/:product_id', cartController.removeCartProduct.bind(cartController))

module.exports = router;
