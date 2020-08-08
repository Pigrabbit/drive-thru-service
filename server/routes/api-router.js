const express = require("express");
const router = express.Router();

const storeRouter=require("./store-router.js") 

router.use("/store", storeRouter)

module.exports = router;
