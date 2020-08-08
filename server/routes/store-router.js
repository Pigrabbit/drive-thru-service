const express = require("express");
const router = express.Router();

const { getAllStores, getStoreById } = require("../controller/store-controller");

// GET all stores
router.get("/", getAllStores);

// GET store by Id
router.get("/:id", getStoreById)

module.exports = router;