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
      console.log(cart)
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

      await conn.commit()
      return affectedRows === 1? insertId : -1
    } catch (err) {
      conn.rollback()
      throw err
    } finally {
      conn.release()
    }
  }
}

module.exports = CartRepository
