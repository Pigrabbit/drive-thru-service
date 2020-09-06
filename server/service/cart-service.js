class CartService {
  constructor(cartRepository) {
    this.cartRepository = cartRepository
  }

  async getCartById(id) {
    const cart = await this.cartRepository.getCartById(id)
    return cart
  }
}

module.exports = CartService
