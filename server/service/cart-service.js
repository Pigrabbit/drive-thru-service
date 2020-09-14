class CartService {
  constructor(cartRepository) {
    this.cartRepository = cartRepository
  }

  async getCartById(id) {
    const cart = await this.cartRepository.getCartById(id)
    return cart
  }

  async putProductIntoCart({ productId, quantity }) {
    const result = await this.cartRepository.addToCart({ productId, quantity })
    return result
  }

  async modifyProductQuantity({ cartId, productId, quantity }) {
    const result = await this.cartRepository.updateQuantity({ cartId, productId, quantity })
    return result
  }

  async removeProductFromCart({ cartId, productId }) {
    const result = await this.cartRepository.removeProduct({ cartId, productId })
    return result
  }
}

module.exports = CartService
