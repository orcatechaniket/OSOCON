const express = require("express")
const router = express.Router();
const {createAgenda , getAgenda , fileterdAgenda , bulkUpload} = require("../controllers/agendaController")

router.post("/" , createAgenda )
router.get("/agenda-list" ,getAgenda )
// router.delete("/agenda-list/:id" ,deleteAgenda )
router.post("/filter" , fileterdAgenda )
// router.get("/bulk-upload" , bulkUpload )
module.exports = router ;