class CartController {
  constructor(CartService, CartRepository, db) {
    this.cartRepository = new CartRepository(db)
    this.cartService = new CartService(this.cartRepository)
  }

  async getCart(req, res, next) {
    try {
      const { cartId } = req.params
      const cart = await this.cartService.getCartById(cartId)
      res.status(200).json( cart )
    } catch (err) {
      next(err)
    }
  }

  async postCart(req, res, next) {
    try {
      const { productId, quantity } = req.body
      const hasSuccess = await this.cartService.putProductIntoCart({ productId, quantity })

      res.status(201).json({ message: 'product added to cart', success: hasSuccess })
    } catch (err) {
      next(err)
    }
  }

  async updateCart(req, res, next) {
    try {
      const { cartId, productId } = req.params
      const { quantity } = req.body
      if (quantity < 1) throw new Error('Bad request')
      const hasSuccess = await this.cartService.modifyProductQuantity({
        cartId,
        productId,
        quantity,
      })

      res
        .status(200)
        .json({ message: 'the quantity of product has been updated', success: hasSuccess })
    } catch (err) {
      next(err)
    }
  }

  async deleteCart(req, res, next) {
    try {
      const { cartId, productId } = req.params
      const isDeleted = await this.cartService.removeProductFromCart({ cartId, productId })

      res.status(200).json({ success: isDeleted })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = CartController
