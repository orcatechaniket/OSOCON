const express = require("express")
const router = express.Router();
const {createSession , getSession, deleteSession} = require("../controllers/sessionController")

router.post("/" , createSession )
router.get("/session-list" , getSession )
router.delete("/session-list/:id" , deleteSession )
module.exports = router ;