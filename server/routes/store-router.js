const express = require("express");
const router = express.Router();

const { getAllStores, getStoreById,getStoreAddressById,getStorePhoneById,updateStoreInfo} = require("../controller/store-controller");

// GET all stores
router.get("/", getAllStores);

// GET store by Id
router.get("/:id", getStoreById);

router.get("/:id/address", getStoreAddressById);

router.get("/:id/phone", getStorePhoneById);

router.patch("/:id", updateStoreInfo);

module.exports = router;