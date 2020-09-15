const express = require('express')
const router = express.Router()

const db = require('../utils/mysql')
const CategoryController = require('../controller/category-controller')
const CategoryService = require('../service/category-service')
const CategoryRepository = require('../repository/category-repository')

const categoryController = new CategoryController(CategoryService, CategoryRepository, db)

router.get('/:id', categoryController.getOneCategory.bind(categoryController))
router.get('/', categoryController.getAllCategory.bind(categoryController))

module.exports = router
