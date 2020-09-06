class StoreRepository {
  constructor(db) {
    this.db = db
  }

  async getStoreById(id) {
    const conn = await this.db.getConnection()
    try {
      const query = 'SELECT * FROM store WHERE id = ?'
      const [rows] = await conn.query(query, [id])
      if (!rows.length)
        throw new Error('Not Found')

      return rows[0]
    } catch (err) {
      throw err
    } finally {
      conn.release()
    }
  }
}

module.exports = StoreRepository