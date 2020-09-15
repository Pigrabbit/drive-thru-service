class CategoryRepository {
  constructor(db) {
    this.db = db
  }

  async getAllCategory() {
    const conn = await this.db.getConnection()
    try {
      const query = 'SELECT * FROM category'
      const [rows] = await conn.query(query)
      if (!rows.length) throw new Error('Not Found')

      return rows
    } catch (err) {
      throw err
    } finally {
      conn.release()
    }
  }
}

module.exports = CategoryRepository
