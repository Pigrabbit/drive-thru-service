class StoreService {
  constructor(storeRepository) {
    this.storeRepository = storeRepository
  }

  async getStoreById(id) {
    const store = await this.storeRepository.getStoreById(id)
    return store
  }

  async getStoreByCategory() {

  }
}

module.exports = StoreService