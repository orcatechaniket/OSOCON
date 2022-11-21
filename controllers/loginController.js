
const asyncHandler = require("express-async-handler");

const login = asyncHandler(async(req,res) => {
    const {userid , password} = req.body
    const loginData = {
        userid : "admin",
        password : "Osocon@"
    }
    if(userid === "admin"){
        if(password === "Osocon@"){
            res.status(200).json({loginData})
        }else{
            res.status(401).json({ message : "Incoorect credential password"})
        }
    }else{
        res.status(401).json({ message : "Incoorect credential"})
    }
})

module.exports = {
    login
}