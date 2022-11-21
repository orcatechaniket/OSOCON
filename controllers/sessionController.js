const Session = require("../models/sessionModel")

const asyncHandler = require("express-async-handler");

const createSession = asyncHandler(async(req,res)=>{
    const {date , hall , session} = req.body
    
    const list = await Session.create({
        session : session
    })
    if(list){
        res.status(200).json({list})
    } else {
        res.status(400).json({message : "Error in creating"})
    }
})


const getSession = asyncHandler(async(req,res) => {
    const list = await Session.find({}).exec()
    if(list){
        res.status(200).json({list})
    } else {
        res.status(400).json({message : "Erorr in fetching data"})
    }
})

const deleteSession = asyncHandler(async(req,res) => {
    const id = req.params.id
    const list = await Session.deleteOne({_id : id}).exec()

    if(list){
        res.status(200).json({message : "Deleted"})
    }else {
        res.status(400).json({message : "Error in deleting"})
    }
})

module.exports = {
    createSession,
    getSession,
    deleteSession
}