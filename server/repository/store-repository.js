class StoreRepository {
  constructor(db) {
    this.db = db
  }

  async getStoreById(id) {
    const conn = await this.db.getConnection()
    try {
      const query = 'SELECT * FROM store WHERE id = ?'
      const [rows] = await conn.query(query, [id])
      if (!rows.length) throw new Error('Not Found')

      return rows[0]
    } catch (err) {
      throw err
    } finally {
      conn.release()
    }
  }

  async getAllStoreByCategory({ categoryId, offset = 0, limit = 20 }) {
    const conn = await this.db.getConnection()
    try {
      const query = 'SELECT * FROM store WHERE category_id = ? LIMIT ? OFFSET ?'
      const [rows] = await conn.query(query, [categoryId, parseInt(limit), parseInt(offset)])
      if (!rows.length) throw new Error('Not Found')

      return rows
    } catch (err) {
      throw err
    } finally {
      conn.release()
    }
  }

  async getMenuByStoreId(id) {
    const conn = await this.db.getConnection()
    try {
      const query = 'SELECT p.* FROM product p JOIN store s ON p.store_id = s.id WHERE s.id = ?'
      const [rows] = await conn.query(query, [id])
      if (!rows.length) throw new Error('Not Found')

      return rows
    } catch (err) {
      throw err
    } finally {
      conn.release()
    }
  }
}

module.exports = StoreRepository
