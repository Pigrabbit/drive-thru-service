class StoreService {
  constructor(storeRepository) {
    this.storeRepository = storeRepository
  }

  async getStoreById(id, category_id) {
    const store = await this.storeRepository.getStoreById(id, category_id)
    return store
  }

  async getStoresByCategory({ category_id, offset, limit }) {
    const stores = await this.storeRepository.getAllStoreByCategory({ category_id, offset, limit })
    return stores
  }
}

module.exports = StoreService
