const express = require("express")
const router = express.Router();
const {createTitle , getTitle , deleteTitle , filter,filter1 , getOneTitle} = require("../controllers/titleController")
const {updateJudges , updateModerator, updatePanelist , updatePaper , updateTopic , updateConvenor, updateChairperson} = require("../controllers/moderatorController")


router.post("/" , createTitle )
router.get("/title-list" , getTitle )
router.get("/single-title/:id" , getOneTitle )
router.delete("/title-list/:id" , deleteTitle )
router.put("/title/moderator/:id" , updateModerator)
router.put("/title/judges/:id" , updateJudges)
router.put("/title/panelist/:id" , updatePanelist)
router.put("/title/topic/:id" , updateTopic)
router.put("/title/convenor/:id" , updateConvenor)
router.put("/title/paper/:id" , updatePaper)
router.put("/title/chairperson/:id" , updateChairperson)
router.post("/filter" , filter)

module.exports = router ;
