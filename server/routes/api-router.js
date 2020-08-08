const express = require("express");
const router = express.Router();

router.use("/store", storeRouter)

module.exports = router;
