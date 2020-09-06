class CartController {
  constructor(CartService, CartRepository, db) {
    this.cartRepository = new CartRepository(db)
    this.cartService = new CartService(this.cartRepository)
  }

  async getOneCart(req, res, next) {
    try {
      const { cart_id } = req.params
      const cart = await this.cartService.getCartById(cart_id)
      res.status(200).json({ data: cart })
    } catch (err) {
      next(err)
    }
  }

  async createCart(req, res, next) {}

  async updateCartProductQuantity(req, res, next) {}

  async removeCartProduct(req, res, next) {}
}

module.exports = CartController
