class StoreService {
  constructor(storeRepository) {
    this.storeRepository = storeRepository
  }

  async getStoreByCategory() {

  }

  async getStoreById(id) {
    const store = await this.storeRepository.getStoreById(id)
    return store
  }
}

module.exports = StoreService
