class StoreController {
  constructor(StoreService, StoreRepository, db) {
    this.storeRepository = new StoreRepository(db)
    this.storeService = new StoreService(this.storeRepository)
  }

  // Get store by Id
  async getOneStore(req, res, next) {
    try {
      const { id } = req.params
      const store = await this.storeService.getStoreById(id)
      res.status(200).json(store)
    } catch (err) {
      next(err)
    }
  }

  // Get all stores in the category
  async getStoresByCategory(req, res, next) {
    try {
      const { categoryId, offset, limit } = req.query
      const stores = await this.storeService.getStoresByCategory({ categoryId, offset, limit })
      res.status(200).json(stores)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = StoreController
