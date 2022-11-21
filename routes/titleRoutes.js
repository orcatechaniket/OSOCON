const express = require("express")
const router = express.Router();
const {createTitle , getTitle , deleteTitle} = require("../controllers/titleController")
const {updateJudges , updateModerator, updatePanelist , updatePaper} = require("../controllers/moderatorController")


router.post("/" , createTitle )
router.get("/title-list" , getTitle )
router.delete("/title-list/:id" , deleteTitle )
router.put("/title/moderator/:id" , updateModerator)
router.put("/title/judges/:id" , updateJudges)
router.put("/title/panelist/:id" , updatePanelist)
router.put("/title/paper/:id" , updatePaper)
module.exports = router ;