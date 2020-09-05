const pool = require('../utils/mysql')

class StoreController {
  constructor(StoreService, StoreRepository, db) {
    this.storeRepository = new StoreRepository(db)
    this.storeService = new StoreService(this.storeRepository)
  }
  
  // Get store by Id
  async getOneStore(req, res, next) {
    try {
      const store = await this.storeService.getStoreById(req.params.id)
      res.status(200).json({ data: store })
    } catch(err) {
      next(err)
    }
  }

  // Get all store
  async getStoreByCategory(req, res, next) {

  }
  
}

module.exports = StoreController
