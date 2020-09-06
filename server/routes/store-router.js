const express = require("express");
const router = express.Router();

const db = require('../utils/mysql')
const StoreController = require('../controller/store-controller')
const StoreService = require('../service/store-service')
const StoreRepository = require('../repository/store-repository')

const storeController = new StoreController(StoreService, StoreRepository, db)

// GET store by Id
router.get("/:category_id/:id", storeController.getOneStore.bind(storeController));

module.exports = router;
