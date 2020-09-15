class CategoryService {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository
  }

  async getAllCategory() {
    const categoryList = await this.categoryRepository.getAllCategory()
    return categoryList
  }
}

module.exports = CategoryService
