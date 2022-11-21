const express = require("express")
const router = express.Router();
const {createHall , getHall , deleteHall} = require ("../controllers/hallController")

router.post("/" , createHall )
router.get("/hall-list" , getHall )
router.delete("/hall-list/:id" , deleteHall )
module.exports = router ;