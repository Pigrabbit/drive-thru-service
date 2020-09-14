class CartController {
  constructor(CartService, CartRepository, db) {
    this.cartRepository = new CartRepository(db)
    this.cartService = new CartService(this.cartRepository)
  }

  async getCart(req, res, next) {
    try {
      const { cart_id } = req.params
      const cart = await this.cartService.getCartById(cart_id)
      res.status(200).json({ data: cart })
    } catch (err) {
      next(err)
    }
  }

  async postCart(req, res, next) {
    try {
      const { productId, quantity } = req.body
      const cartProductId = await this.cartService.putProductIntoCart({ productId, quantity })
      if (cartProductId === -1) throw new Error('Internal Server Error')

      res.status(201).json({ message: 'product added to cart', data: { cartProductId } })
    } catch (err) {
      next(err)
    }
  }

  async updateCart(req, res, next) {}

  async deleteCart(req, res, next) {}
}

module.exports = CartController
