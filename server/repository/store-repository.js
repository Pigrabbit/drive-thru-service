class StoreRepository {
  constructor(db) {
    this.db = db
  }

  async getStoreById(id, category_id) {
    const conn = await this.db.getConnection()
    try {
      const query = 'SELECT * FROM store WHERE id = ? AND category_id = ?'
      const [rows] = await conn.query(query, [id, category_id])
      if (!rows.length) throw new Error('Not Found')

      return rows[0]
    } catch (err) {
      throw err
    } finally {
      conn.release()
    }
  }

  async getAllStoreByCategory({ category_id, offset, limit }) {
    const conn = await this.db.getConnection()
    try {
      const query = 'SELECT * FROM store WHERE category_id = ? LIMIT ? OFFSET ?'
      const [rows] = await conn.query(query, [category_id, parseInt(limit), parseInt(offset)])
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
