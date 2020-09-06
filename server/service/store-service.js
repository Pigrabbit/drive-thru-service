class StoreService {
  constructor(storeRepository) {
    this.storeRepository = storeRepository
  }

  async getStoreById(id, category_id) {
    const store = await this.storeRepository.getStoreById(id, category_id)
    return store
  }

  async getStoresByCategory(category_id) {
    const stores = await this.storeRepository.getAllStoreByCategory(category_id)
    return stores
  }
}

module.exports = StoreService
