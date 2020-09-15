class CategoryController {
  constructor(CategoryService, CategoryRepository, db) {
    this.categoryRepository = new CategoryRepository(db)
    this.categoryService = new CategoryService(this.categoryRepository)
  }

  async getAllCategory(req, res, next) {
    try {
      const categoryList = await this.categoryService.getAllCategory()
      res.status(200).json(categoryList)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = CategoryController
