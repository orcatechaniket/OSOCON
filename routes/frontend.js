const express = require("express")
const router = express.Router();

router.get("/" , (req,res) => {
    res.render("adminlogin")
})
router.post("/", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    console.log(password);

    if(username === "admin"){
        if(password === "Osocon@2022"){
            res.render("date")
        }else{
           console.error("Incorrect credential")
        }
    }else {
        console.error("Incorrect credential")
    }
  });

  router.get("/date" , (req,res) => {
    res.render("date")
  })


module.exports = router ;