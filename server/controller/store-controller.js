const pool = require('../utils/mysql')

class StoreController {
  constructor(StoreService, StoreRepository, db) {
    this.storeRepository = new StoreRepository(db)
    this.storeService = new StoreService(this.storeRepository)
  }

  // Get store by Id
  async getOneStore(req, res, next) {
    try {
      const { id, category_id } = req.params
      const store = await this.storeService.getStoreById(id, category_id)
      res.status(200).json({ data: store })
    } catch (err) {
      next(err)
    }
  }

  // Get all stores in the category
  async getStoresByCategory(req, res, next) {
    try {
      const { category_id } = req.params
      const { offset, limit } = req.query
      const stores = await this.storeService.getStoresByCategory({ category_id, offset, limit })
      res.status(200).json({ data: stores })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = StoreController
