class CategoryService {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository
  }

  async getOneCategory(id) {
    const category = await this.categoryRepository.getCategoryById(id)
    return category
  }

  async getAllCategory() {
    const categoryList = await this.categoryRepository.getAllCategory()
    return categoryList
  }
}

module.exports = CategoryService
