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
}

module.exports = CartRepository
