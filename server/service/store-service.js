class StoreService {
  constructor(storeRepository) {
    this.storeRepository = storeRepository
  }

  async getStoreById(id) {
    const store = await this.storeRepository.getStoreById(id)
    return store
  }

  async getStoresByCategory({ categoryId, offset, limit }) {
    const stores = await this.storeRepository.getAllStoreByCategory({ categoryId, offset, limit })
    return stores
  }

  async getMenu(id) {
    const menu = await this.storeRepository.getMenuByStoreId(id)
    return menu
  }
}

module.exports = StoreService
