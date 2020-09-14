class CartRepository {
  constructor(db) {
    this.db = db
  }

  async getCartById(id) {
    const conn = await this.db.getConnection()
    try {
      const query = `
        SELECT c.id, cp.product_id, cp.quantity, p.name, p.price FROM cart c
        JOIN cart_product cp ON c.id = cp.cart_id
        JOIN product p ON cp.product_id = p.id
        WHERE c.id = ?;
      `
      const [rows] = await conn.query(query, [id])

      return rows
    } catch (err) {
      throw err
    } finally {
      conn.release()
    }
  }

  async addToCart({ productId, quantity }) {
    const conn = await this.db.getConnection()
    const mockUserId = 1
    try {
      await conn.beginTransaction()

      const findCartQuery = `
        SELECT * FROM cart WHERE user_id = ? AND is_paid = 0 
        ORDER BY created_at DESC LIMIT 1
      `
      const [cart] = await conn.query(findCartQuery, [mockUserId])

      let cartId = null
      if (!cart.length) {
        const createNewCartQuery = 'INSERT INTO cart (user_id, is_paid) VALUE (?, 0)'
        const [rows] = await conn.query(createNewCartQuery, [mockUserId])
        const { insertId } = rows
        cartId = insertId
      } else {
        cartId = cart[0].id
      }

      const insertCartProductQuery =
        'INSERT INTO cart_product (cart_id, product_id, quantity) VALUES (?, ?, ?)'
      const [rows] = await conn.query(insertCartProductQuery, [cartId, productId, quantity])
      const { affectedRows, insertId } = rows
      if (affectedRows !== 1) throw new Error('Internal Server Error')

      await conn.commit()
      return insertId
    } catch (err) {
      conn.rollback()
      throw err
    } finally {
      conn.release()
    }
  }

  async updateQuantity({ cartId, productId, quantity }) {
    const conn = await this.db.getConnection()
    try {
      await conn.beginTransaction()
      const checkCartIsPaidQuery = 'SELECT * FROM cart WHERE id=?'
      const [carts] = await conn.query(checkCartIsPaidQuery, [cartId])
      if (carts[0].is_paid !== 0) throw new Error('Bad Request')

      const query = 'UPDATE cart_product SET quantity = ? WHERE cart_id = ? AND product_id = ?'
      const [rows] = await conn.query(query, [quantity, cartId, productId])
      const { affectedRows } = rows
      if (affectedRows !== 1) throw new Error('Internal Server Error')

      await conn.commit()
      return true
    } catch (err) {
      conn.rollback()
      throw err
    } finally {
      conn.release()
    }
  }

  async removeProduct({ cartId, productId }) {
    const conn = await this.db.getConnection()
    try {
      await conn.beginTransaction()
      const checkCartIsPaidQuery = 'SELECT * FROM cart WHERE id=?'
      const [carts] = await conn.query(checkCartIsPaidQuery, [cartId])
      if (carts[0].is_paid !== 0) throw new Error('Bad Request')

      const deleteCartProductQuery = 'DELETE FROM cart_product WHERE cart_id = ? AND product_id = ?'
      const [rows] = await conn.query(deleteCartProductQuery, [cartId, productId])
      const { affectedRows } = rows
      if (affectedRows !== 1) throw new Error('Internal Server Error')

      await conn.commit()
      return true
    } catch(err) {
      conn.rollback()
      throw err
    } finally {
      conn.release()
    }
  }
}

module.exports = CartRepository
