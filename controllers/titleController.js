const Title = require("../models/titleModel")

const asyncHandler = require("express-async-handler");

const createTitle = asyncHandler(async(req,res) => {
    const {title , date , hall , session}  =req.body

    const list = await Title.create({
        title : title ,
        date : date,
        hall : hall,
        session : session
    })
    if(list){
        res.status(200).json({list})
    }else {
        res.status(400).json({message : "Error in creating title"})
    }
})

const getTitle = asyncHandler(async(req,res) => {
    const list = await Title.find({}).exec()
    if(list){
        res.status(200).json({list})
    }else {
        res.status(400).json({message: "Error in fetching Title"})
    }
})

const deleteTitle = asyncHandler(async(req,res) => {
    const id = req.params._id

    const list = await Title.deleteOne({_id : id})
    if(list){
        res.status(200).json({list})
    }else {
        res.status(400).json({message : "Error in deleting"})
    }
})

module.exports = {
    createTitle,
    getTitle,
    deleteTitle
}