class StoreService {
  constructor(storeRepository) {
    this.storeRepository = storeRepository
  }

  async getStoreById(id, category_id) {
    const store = await this.storeRepository.getStoreById(id, category_id)
    return store
  }

  async getStoreByCategory() {

  }
}

module.exports = StoreService