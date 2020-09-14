class CartService {
  constructor(cartRepository) {
    this.cartRepository = cartRepository
  }

  async getCartById(id) {
    const cart = await this.cartRepository.getCartById(id)
    return cart
  }

  async putProductIntoCart({ productId, quantity }) {
    const cartProductId = await this.cartRepository.addToCart({ productId, quantity })
    return cartProductId
  }
}

module.exports = CartService
